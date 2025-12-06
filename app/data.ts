// app/data.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  featured?: boolean;
}

export const featuredItems: Product[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella & basil.",
    image: "/temporary/p1.png",
    price: 12.99,
    featured: true,
  },
  {
    id: 2,
    name: "Cheeseburger",
    description: "Juicy beef burger with cheddar, lettuce & tomato.",
    image: "/temporary/p2.png",
    price: 10.99,
    featured: true,
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    description: "Pepperoni, mozzarella & spicy tomato sauce.",
    image: "/temporary/p3.png",
    price: 13.99,
    featured: true,
  },
];
