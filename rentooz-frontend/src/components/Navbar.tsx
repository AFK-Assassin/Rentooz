import { useState } from 'react';

import { ShoppingBag, Heart, User, Coins, Menu, X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

interface NavbarProps {
  onProfileClick: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onProfileClick, onPageChange, currentPage }: NavbarProps) {
  const { state } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
            <ShoppingBag className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-2xl font-bold text-purple-600">Rentooz</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onPageChange('shop')}
              className={`text-gray-600 hover:text-purple-600 ${currentPage === 'shop' ? 'text-purple-600' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => onPageChange('wishlist')}
              className="relative text-gray-600 hover:text-purple-600"
            >
              <Heart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => onPageChange('coins')}
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600"
            >
              <Coins className="h-6 w-6 text-yellow-500" />
              <span>2,500</span>
            </button>
            <button onClick={onProfileClick}>
              <User className="h-6 w-6 text-gray-600 hover:text-purple-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  onPageChange('shop');
                  setIsMenuOpen(false);
                }}
                className={`text-gray-600 hover:text-purple-600 ${currentPage === 'shop' ? 'text-purple-600' : ''}`}
              >
                Shop
              </button>
              <button 
                onClick={() => {
                  onPageChange('wishlist');
                  setIsMenuOpen(false);
                }}
                className="relative inline-flex items-center text-gray-600 hover:text-purple-600"
              >
                <Heart className="h-6 w-6 mr-2" />
                <span>Wishlist</span>
                {state.items.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => {
                  onPageChange('coins');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600"
              >
                <Coins className="h-6 w-6 text-yellow-500 mr-2" />
                <span>2,500 Coins</span>
              </button>
              <button 
                onClick={() => {
                  onProfileClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center text-gray-600 hover:text-purple-600"
              >
                <User className="h-6 w-6 mr-2" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}