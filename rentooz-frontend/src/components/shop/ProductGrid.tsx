
import ProductCard from './ProductCard';
import { ClothingItem } from '../../types';

const items: ClothingItem[] = [
  // Women's Clothing - Rent
  {
    id: 1,
    name: "Designer Evening Gown",
    brand: "Zara",
    size: "M",
    category: "Dresses",
    condition: "Like New",
    description: "Elegant black evening gown perfect for formal events",
    price: "Rs1,200/week",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    brand: "H&M",
    size: "S",
    category: "Dresses",
    condition: "Like New",
    description: "Light and breezy summer dress with floral pattern",
    price: "Rs800/week",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 3,
    name: "Classic Tuxedo",
    brand: "Hugo Boss",
    size: "L",
    category: "Suits",
    condition: "Excellent",
    description: "Black classic tuxedo for formal occasions",
    price: "Rs2,500/week",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 4,
    name: "Business Suit",
    brand: "Calvin Klein",
    size: "M",
    category: "Suits",
    condition: "Like New",
    description: "Navy blue business suit",
    price: "Rs1,800/week",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 5,
    name: "Vintage Leather Jacket",
    brand: "Levi's",
    size: "M",
    category: "Outerwear",
    condition: "Good",
    description: "Classic brown leather jacket",
    price: "Rs3,999",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 6,
    name: "Designer Handbag",
    brand: "Michael Kors",
    size: "One Size",
    category: "Accessories",
    condition: "Like New",
    description: "Black leather designer handbag",
    price: "Rs4,500",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 7,
    name: "Denim Jacket",
    brand: "Levi's",
    size: "L",
    category: "Outerwear",
    condition: "Good",
    description: "Classic denim jacket",
    price: "Rs2,999",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 8,
    name: "Casual Blazer",
    brand: "Zara",
    size: "M",
    category: "Outerwear",
    condition: "Excellent",
    description: "Grey casual blazer",
    price: "Rs3,500",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 9,
    name: "Cocktail Dress",
    brand: "BCBG",
    size: "S",
    category: "Dresses",
    condition: "Like New",
    description: "Red cocktail dress perfect for parties",
    price: "Rs1,500/week",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 10,
    name: "Designer Gown",
    brand: "Vera Wang",
    size: "M",
    category: "Dresses",
    condition: "Excellent",
    description: "White designer evening gown",
    price: "Rs3,000/week",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 11,
    name: "Wool Coat",
    brand: "Burberry",
    size: "L",
    category: "Outerwear",
    condition: "Good",
    description: "Classic wool coat in camel color",
    price: "Rs5,999",
    image: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 12,
    name: "Leather Boots",
    brand: "Timberland",
    size: "UK 42",
    category: "Shoes",
    condition: "Like New",
    description: "Brown leather boots",
    price: "Rs2,500",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 13,
    name: "Silk Saree",
    brand: "Fabindia",
    size: "Free Size",
    category: "Ethnic Wear",
    condition: "Like New",
    description: "Traditional silk saree with intricate embroidery",
    price: "Rs1,800/week",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 14,
    name: "Men's Sherwani",
    brand: "Manyavar",
    size: "L",
    category: "Ethnic Wear",
    condition: "Excellent",
    description: "Royal blue wedding sherwani",
    price: "Rs2,000/week",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 15,
    name: "Designer Clutch",
    brand: "Gucci",
    size: "One Size",
    category: "Accessories",
    condition: "Good",
    description: "Evening party clutch",
    price: "Rs3,500",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 16,
    name: "Summer Jumpsuit",
    brand: "Zara",
    size: "S",
    category: "Dresses",
    condition: "Like New",
    description: "Casual summer jumpsuit",
    price: "Rs900/week",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 17,
    name: "Men's Kurta Set",
    brand: "Fabindia",
    size: "M",
    category: "Ethnic Wear",
    condition: "Good",
    description: "Traditional cotton kurta set",
    price: "Rs2,999",
    image: "https://images.unsplash.com/photo-1597983072903-89e8b7c20b58?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 18,
    name: "Designer Sunglasses",
    brand: "Ray-Ban",
    size: "One Size",
    category: "Accessories",
    condition: "Excellent",
    description: "Classic aviator sunglasses",
    price: "Rs1,999",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 19,
    name: "Bridal Lehenga",
    brand: "Sabyasachi",
    size: "M",
    category: "Ethnic Wear",
    condition: "Like New",
    description: "Heavy embroidered bridal lehenga",
    price: "Rs5,000/week",
    image: "https://images.unsplash.com/photo-1585944285854-d06c019aaca3?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 20,
    name: "Men's Waistcoat",
    brand: "Raymond",
    size: "L",
    category: "Formal Wear",
    condition: "Good",
    description: "Classic formal waistcoat",
    price: "Rs2,500",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 21,
    name: "Designer Watch",
    brand: "Fossil",
    size: "One Size",
    category: "Accessories",
    condition: "Excellent",
    description: "Luxury chronograph watch",
    price: "Rs4,999",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 22,
    name: "Party Gown",
    brand: "Forever New",
    size: "S",
    category: "Dresses",
    condition: "Like New",
    description: "Sequined evening gown",
    price: "Rs1,800/week",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 23,
    name: "Men's Blazer",
    brand: "Van Heusen",
    size: "M",
    category: "Formal Wear",
    condition: "Good",
    description: "Navy blue formal blazer",
    price: "Rs3,999",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 24,
    name: "Designer Scarf",
    brand: "Hermès",
    size: "One Size",
    category: "Accessories",
    condition: "Like New",
    description: "Silk printed scarf",
    price: "Rs2,999",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 25,
    name: "Wedding Suit",
    brand: "Raymond",
    size: "L",
    category: "Formal Wear",
    condition: "Excellent",
    description: "Three-piece wedding suit",
    price: "Rs3,500/week",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 26,
    name: "Designer Belt",
    brand: "Gucci",
    size: "M",
    category: "Accessories",
    condition: "Good",
    description: "Leather designer belt",
    price: "Rs3,500",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 27,
    name: "Formal Shoes",
    brand: "Clarks",
    size: "UK 43",
    category: "Shoes",
    condition: "Like New",
    description: "Brown leather formal shoes",
    price: "Rs2,999",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 28,
    name: "Designer Tie Set",
    brand: "Louis Philippe",
    size: "One Size",
    category: "Accessories",
    condition: "Excellent",
    description: "Silk tie and pocket square set",
    price: "Rs500/week",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 29,
    name: "Evening Clutch",
    brand: "Jimmy Choo",
    size: "One Size",
    category: "Accessories",
    condition: "Like New",
    description: "Crystal embellished evening clutch",
    price: "Rs1,000/week",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 30,
    name: "Traditional Dhoti Set",
    brand: "Manyavar",
    size: "L",
    category: "Ethnic Wear",
    condition: "Good",
    description: "Silk dhoti and angavastram set",
    price: "Rs1,500/week",
    image: "https://images.unsplash.com/photo-1597983072903-89e8b7c20b58?auto=format&fit=crop&w=500",
    type: "rent"
  },
  {
    id: 31,
    name: "Designer Cufflinks",
    brand: "Mont Blanc",
    size: "One Size",
    category: "Accessories",
    condition: "Excellent",
    description: "Silver designer cufflinks",
    price: "Rs2,500",
    image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&w=500",
    type: "sale"
  },
  {
    id: 32,
    name: "Bridal Jewelry Set",
    brand: "Tanishq",
    size: "One Size",
    category: "Accessories",
    condition: "Like New",
    description: "Complete bridal jewelry set",
    price: "Rs3,000/week",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=500",
    type: "rent"
  }
];

interface ProductGridProps {
  filters: {
    category: string;
    size: string;
    priceRange: string;
    type: string;
  };
}

export default function ProductGrid({ filters }: ProductGridProps) {
  const filteredItems = items.filter(item => {
    if (filters.type && item.type !== filters.type) return false;
    if (filters.category && item.category.toLowerCase() !== filters.category.toLowerCase()) return false;
    if (filters.size && item.size !== filters.size) return false;
    if (filters.priceRange) {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (price < min || price > max) return false;
      } else {
        if (price < min) return false;
      }
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {filteredItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}