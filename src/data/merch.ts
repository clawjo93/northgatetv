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
    name: "Northgate TV — Limited Drop Vol. 1",
    description: "The first ever Northgate TV limited edition tee. Only 50 made — once they're gone, they're gone for good. Rep the brand that's been covering College Station nightlife for years. 450K+ monthly viewers know what Northgate TV is. Now you can wear it. Limited to 50 units. No restocks. Please note: All items are made to order. Allow 2–3 weeks for production and shipping after your order is placed.",
    price: 35,
    image: "/images/merch-tee.jpeg",
    category: "Shirts",
    shopUrl: "https://northgatetv-shop.fourthwall.com/products/northgate-tv-limited-drop-vol-1",
  },
  {
    id: "2",
    name: "Northgate TV — Logo Hat",
    description: "The official Northgate TV hat. Clean embroidered logo, structured fit — built for game days, nights out, and everything in between. College Station's #1 local media platform, now on your head. Please note: All items are made to order. Allow 2–3 weeks for production and shipping after your order is placed.",
    price: 32,
    image: "/images/merch-hat.jpeg",
    category: "Hats",
    shopUrl: "https://northgatetv-shop.fourthwall.com/products/northgate-tv-logo-hat",
  },

  {
    id: "5",
    name: "Northgate TV — Logo Sticker",
    description: "Slap it on your laptop, your Yeti, your car — wherever you want people to know you rock with Northgate TV. Weatherproof vinyl sticker. Built to last. College Station's #1 local media platform — in sticker form. Please note: All items are made to order. Allow 2–3 weeks for production and shipping after your order is placed.",
    price: 5,
    image: "/images/merch-sticker.jpeg",
    category: "Accessories",
    shopUrl: "https://northgatetv-shop.fourthwall.com/products/northgate-tv-logo-sticker",
  },

];
