import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { ClothingItem } from '../types';
import { API_BASE_URL } from '../config';

interface WishlistState {
  items: ClothingItem[];
}

type WishlistAction =
  | { type: 'SET_WISHLIST'; payload: ClothingItem[] }
  | { type: 'ADD_TO_WISHLIST'; payload: ClothingItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
} | undefined>(undefined);

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case 'SET_WISHLIST':
      return { items: action.payload };

    case 'ADD_TO_WISHLIST': {
      if (state.items.some(item => item.id === action.payload.id)) return state;

      // API call to backend
      const userId = localStorage.getItem('userId');
      if (userId) {
        axios.post(`${API_BASE_URL}/wishlist`, {
          user_id: userId,
          title: action.payload.name,
          description: action.payload.brand,
        }).catch(err => console.error("Error adding to wishlist:", err));
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case 'REMOVE_FROM_WISHLIST': {
      // API call to backend
      axios.delete(`${API_BASE_URL}/wishlist/${action.payload}`)
        .catch(err => console.error("Error removing from wishlist:", err));

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    axios
      .get(`${API_BASE_URL}/wishlist`, { params: { user_id: userId } })
      .then((res) => {
        const items = res.data as ClothingItem[];
        dispatch({ type: 'SET_WISHLIST', payload: items });
      })
      .catch((err) => console.error('Error fetching wishlist:', err));
  }, []);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
