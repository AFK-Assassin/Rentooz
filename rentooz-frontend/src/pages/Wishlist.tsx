import React from 'react';
import { Heart, Trash2, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import CheckoutModal from '../components/shop/CheckoutModal';

export default function Wishlist() {
  const { state, dispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);

  const handleRemove = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: itemId });
  };

  const addAllToCart = () => {
    state.items.forEach(item => {
      cartDispatch({ type: 'ADD_TO_CART', payload: item });
    });
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <div className="flex items-center">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mr-2" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Wishlist</h1>
          </div>
          {state.items.length > 0 && (
            <button
              onClick={addAllToCart}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Checkout All</span>
            </button>
          )}
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500">Start adding items you love to your wishlist!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 sm:h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
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
                  <button
                    onClick={() => {
                      cartDispatch({ type: 'ADD_TO_CART', payload: item });
                      setIsCheckoutOpen(true);
                    }}
                    className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </div>
  );
}
