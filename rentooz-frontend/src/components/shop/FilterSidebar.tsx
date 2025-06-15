
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    category: string;
    size: string;
    priceRange: string;
    type: string;
  };
  setFilters: (filters: any) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ filters, setFilters, isVisible, onClose }: FilterSidebarProps) {
  return (
    <div className={`
      lg:block w-64 flex-shrink-0
      ${isVisible ? 'fixed inset-0 z-40 lg:relative lg:inset-auto' : 'hidden'}
    `}>
      <div className="h-full bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between lg:hidden">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Category</h4>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">All Categories</option>
              <option value="dresses">Dresses</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div>
            <h4 className="font-medium mb-3">Size</h4>
            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">All Sizes</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </div>

          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">All Prices</option>
              <option value="0-50">Rs0 - Rs50</option>
              <option value="51-100">Rs51 - Rs100</option>
              <option value="101-200">Rs101 - Rs200</option>
              <option value="201+">Rs201+</option>
            </select>
          </div>

          <div>
            <h4 className="font-medium mb-3">Type</h4>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">All Types</option>
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}