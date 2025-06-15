
import { Heart, ShoppingCart } from 'lucide-react';
import { ClothingItem } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  item: ClothingItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  const isInWishlist = wishlistState.items.some(wishlistItem => wishlistItem.id === item.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.id });
    } else {
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: item });
    }
  };

  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            onClick={toggleWishlist}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart 
              className={`h-5 w-5 ${
                isInWishlist ? 'text-red-500 fill-current' : 'text-gray-400'
              } transition-colors`} 
            />
          </button>
          <button
            onClick={addToCart}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-gray-400 hover:text-purple-600" />
          </button>
        </div>
        <div className="absolute top-2 left-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            item.type === 'rent' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
          }`}>
            {item.type === 'rent' ? 'Rent' : 'Sale'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-purple-600 font-medium">{item.price}</span>
          <span className="text-sm text-gray-500">{item.size}</span>
        </div>
      </div>
    </div>
  );
}