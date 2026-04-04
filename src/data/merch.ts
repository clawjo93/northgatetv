export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  shopUrl: string;
}

export const merchItems: MerchItem[] = [
  {
    id: "1",
    name: "NorthgateTV Classic Tee",
    description: "The original NorthgateTV logo tee. 100% cotton, super soft.",
    price: 28,
    image: "/images/merch-tee.jpg",
    category: "Shirts",
    shopUrl: "#",
  },
  {
    id: "2",
    name: "NorthgateTV Snapback Hat",
    description: "Maroon and white snapback with embroidered NorthgateTV logo.",
    price: 32,
    image: "/images/merch-hat.jpg",
    category: "Hats",
    shopUrl: "#",
  },
  {
    id: "3",
    name: "NorthgateTV Hoodie",
    description: "Stay warm on those late Northgate nights. Heavyweight fleece.",
    price: 55,
    image: "/images/merch-hoodie.jpg",
    category: "Hoodies",
    shopUrl: "#",
  },
  {
    id: "4",
    name: "NorthgateTV Koozie Pack (4)",
    description: "Keep your drinks cold with NorthgateTV koozies. Pack of 4.",
    price: 15,
    image: "/images/merch-koozie.jpg",
    category: "Accessories",
    shopUrl: "#",
  },
  {
    id: "5",
    name: "NorthgateTV Sticker Pack",
    description: "5 die-cut stickers perfect for laptops, water bottles, and more.",
    price: 10,
    image: "/images/merch-stickers.jpg",
    category: "Accessories",
    shopUrl: "#",
  },
  {
    id: "6",
    name: "NorthgateTV Dad Hat",
    description: "Relaxed fit dad hat with embroidered logo. One size fits all.",
    price: 28,
    image: "/images/merch-dadhat.jpg",
    category: "Hats",
    shopUrl: "#",
  },
];
