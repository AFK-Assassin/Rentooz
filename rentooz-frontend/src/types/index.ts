export interface User {
  id: string;
  email: string;
  name: string;
  coins: number;
}

export interface ClothingItem {
  id: number;
  name: string;
  brand: string;
  size: string;
  category: string;
  condition: string;
  description: string;
  price: string;
  rentalPeriod?: string;
  image: string;
  type: 'rent' | 'sale';
}

export interface WishlistItem extends ClothingItem {
  addedAt: Date;
}