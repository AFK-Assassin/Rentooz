import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api'; // Adjust if deployed

const items = [
  {
    id: 1,
    name: 'Designer Summer Dress',
    price: 'Rs45/week',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500',
    category: 'Rent',
    brand: 'Zara',
    size: 'M',
    condition: 'Like New',
    description: 'Beautiful floral summer dress',
    type: 'rent'
  },
  {
    id: 2,
    name: 'Vintage Leather Jacket',
    price: 'Rs199',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500',
    category: 'Sale',
    brand: "Levi's",
    size: 'L',
    condition: 'Good',
    description: 'Classic leather jacket',
    type: 'sale'
  },
  {
    id: 3,
    name: 'Premium Denim Collection',
    price: 'Rs35/week',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500',
    category: 'Rent',
    brand: 'H&M',
    size: 'M',
    condition: 'Like New',
    description: 'Premium denim collection',
    type: 'rent'
  },
  {
    id: 4,
    name: 'Formal Blazer',
    price: 'Rs149',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500',
    category: 'Sale',
    brand: 'Zara',
    size: 'M',
    condition: 'Good',
    description: 'Classic formal blazer',
    type: 'sale'
  }
];

export default function FeaturedItems() {
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const userId = 1; // Example static user_id

  useEffect(() => {
    axios
      .get<{ id: number; title: string; description: string }[]>(`${API_BASE_URL}/wishlist?user_id=${userId}`)
      .then((res) => {
        const ids = res.data.map((item) => item.id);
        setWishlistIds(ids);
      })
      .catch((err) => console.error("Error loading wishlist:", err));
  }, []);

  const handleToggleWishlist = async (item: any) => {
    if (wishlistIds.includes(item.id)) {
      try {
        await axios.delete(`${API_BASE_URL}/wishlist/${item.id}`);
        setWishlistIds((prev) => prev.filter((id) => id !== item.id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    } else {
      try {
        await axios.post(`${API_BASE_URL}/wishlist`, {
          title: item.name,
          description: item.description,
          user_id: userId
        });
        setWishlistIds((prev) => [...prev, item.id]);
      } catch (error) {
        console.error("Add failed:", error);
      }
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleToggleWishlist(item)}
                    className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        wishlistIds.includes(item.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.category === 'Rent'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
