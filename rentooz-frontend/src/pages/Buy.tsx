import { useState } from 'react';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import ProductGrid from '../components/shop/ProductGrid';
import FilterSidebar from '../components/shop/FilterSidebar';
import CheckoutModal from '../components/shop/CheckoutModal';
import { useCart } from '../context/CartContext';

export default function Buy() {
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    priceRange: '',
    type: 'sale' // Default to showing items for sale
  });
  
  const [showFilters, setShowFilters] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { state: cartState } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Buy Pre-loved Items</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-600 hover:text-purple-600 lg:hidden"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="relative flex items-center text-gray-600 hover:text-purple-600"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartState.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.items.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isVisible={showFilters}
            onClose={() => setShowFilters(false)}
          />
          
          <div className="flex-1">
            <div className="mb-4 sm:mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search pre-loved items..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <ProductGrid filters={filters} />
          </div>
        </div>

        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </div>
  );
}