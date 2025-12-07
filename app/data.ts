export interface FeaturedItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Neapolitan perfection: San Marzano tomatoes, fresh mozzarella & basil.",
    image: "/temporary/p1.png",
    price: "€12.99",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara", 
    description: "Authentic Roman dish with cured guanciale, egg yolk, Pecorino cheese & black pepper.",
    image: "/temporary/p2.png",
    price: "€14.50",
  },
  {
    id: 3,
    name: "Spicy Diavola Pizza",
    description: "Loaded with hot Calabrian chili, spicy salami, mozzarella & fiery tomato sauce.",
    image: "/temporary/p3.png",
    price: "€15.99",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description: "Creamy pasta with parmesan, butter & a hint of nutmeg.",
    image: "/temporary/p4.png",
    price: "€13.50",
  },
  {
    id: 5,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomato & cheddar cheese.",
    image: "/temporary/p5.png",
    price: "€11.99",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    description: "Crispy thin crust with zesty tomato sauce and loaded with pepperoni.",
    image: "/temporary/p6.png",
    price: "€14.99",
  },
  {
    id: 7,
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce with garlic and chili flakes over penne pasta.",
    image: "/temporary/p7.png",
    price: "€12.50",
  },
  {
    id: 8,
    name: "Hawaiian Pizza",
    description: "Sweet pineapple and savory ham over melted mozzarella and tomato sauce.",
    image: "/temporary/p8.png",
    price: "€15.50",
  },
  {
    id: 9,
    name: "Cheeseburger Deluxe",
    description: "Beef patty with double cheddar, caramelized onions & pickles.",
    image: "/temporary/p9.png",
    price: "€12.99",
  },
  {
    id: 10,
    name: "Veggie Pizza",
    description: "Loaded with bell peppers, onions, mushrooms, olives & mozzarella.",
    image: "/temporary/p10.png",
    price: "€13.99",
  },
  {
    id: 11,
    name: "Spaghetti Bolognese",
    description: "Classic Italian meat sauce over al dente spaghetti.",
    image: "/temporary/p11.png",
    price: "€14.50",
  },
  {
    id: 12,
    name: "Four Cheese Pizza",
    description: "Mozzarella, parmesan, gorgonzola & ricotta over tomato base.",
    image: "/temporary/p12.png",
    price: "€16.50",
  },
];
