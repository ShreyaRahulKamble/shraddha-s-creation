const products = [
  {
    id: 1,
    name: "Kundan Necklace Set",
    price: 2499,
    originalPrice: 3499,
    category: "necklace",
    description: "Elegant Kundan necklace set with matching earrings. Perfect for weddings and festive occasions. Handcrafted with precision and attention to detail.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Kundan, Brass",
    color: "Gold",
    weight: "45g"
  },
  {
    id: 2,
    name: "Oxidized Silver Jhumkas",
    price: 599,
    originalPrice: 899,
    category: "earrings",
    description: "Beautiful oxidized silver jhumka earrings with intricate traditional design. Lightweight and comfortable for all-day wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Oxidized Silver",
    color: "Silver",
    weight: "12g"
  },
  {
    id: 3,
    name: "Pearl Bracelet",
    price: 899,
    originalPrice: 1299,
    category: "bracelet",
    description: "Delicate pearl bracelet with adjustable clasp. Adds elegance to any outfit. Made with genuine freshwater pearls.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Freshwater Pearls, Silver",
    color: "White & Silver",
    weight: "8g"
  },
  {
    id: 4,
    name: "Temple Jewellery Choker",
    price: 3499,
    originalPrice: 4999,
    category: "necklace",
    description: "Traditional South Indian temple jewellery choker with Lakshmi motif. Antique gold finish with ruby and emerald stones.",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Brass, Stones",
    color: "Antique Gold",
    weight: "65g"
  },
  {
    id: 5,
    name: "Meenakari Bangles Set",
    price: 1499,
    originalPrice: 2199,
    category: "bangles",
    description: "Set of 4 colorful Meenakari bangles with traditional enamel work. Vibrant colors and intricate patterns.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Brass, Enamel",
    color: "Multicolor",
    weight: "80g"
  },
  {
    id: 6,
    name: "Polki Diamond Studs",
    price: 1899,
    originalPrice: 2699,
    category: "earrings",
    description: "Classic Polki diamond stud earrings. Small and elegant, perfect for daily wear or special occasions.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1590927852610-34b78f99e114?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Polki, Gold Plated",
    color: "Gold",
    weight: "6g"
  },
  {
    id: 7,
    name: "Chandbali Earrings",
    price: 1299,
    originalPrice: 1899,
    category: "earrings",
    description: "Crescent moon shaped Chandbali earrings with pearl drops. Traditional Mughal design with modern appeal.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Gold Plated, Pearls",
    color: "Gold & White",
    weight: "18g"
  },
  {
    id: 8,
    name: "Navratna Ring",
    price: 799,
    originalPrice: 1199,
    category: "rings",
    description: "Traditional Navratna ring featuring nine precious stones. Believed to bring good fortune and prosperity.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Silver, Nine Stones",
    color: "Multicolor",
    weight: "5g"
  },
  {
    id: 9,
    name: "Antique Gold Necklace",
    price: 4299,
    originalPrice: 5999,
    category: "necklace",
    description: "Long antique gold necklace with coin pendants. Traditional design suitable for ethnic wear and celebrations.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Brass, Antique Finish",
    color: "Antique Gold",
    weight: "95g"
  },
  {
    id: 10,
    name: "Crystal Drop Earrings",
    price: 699,
    originalPrice: 999,
    category: "earrings",
    description: "Modern crystal drop earrings with sparkling stones. Perfect for parties and evening wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Crystal, Alloy",
    color: "Silver",
    weight: "10g"
  },
  {
    id: 11,
    name: "Kada Bracelet",
    price: 1699,
    originalPrice: 2299,
    category: "bracelet",
    description: "Bold gold-plated Kada bracelet with carved patterns. Statement piece for ethnic and fusion outfits.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Gold Plated Brass",
    color: "Gold",
    weight: "35g"
  },
  {
    id: 12,
    name: "Peacock Design Necklace",
    price: 2999,
    originalPrice: 4199,
    category: "necklace",
    description: "Stunning peacock design necklace with colorful stone work. Inspired by South Indian temple art.",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    inStock: false,
    featured: false,
    material: "Brass, Stones",
    color: "Green & Gold",
    weight: "55g"
  },
  {
    id: 13,
    name: "Layered Chain Necklace",
    price: 1199,
    originalPrice: 1699,
    category: "necklace",
    description: "Modern layered chain necklace with delicate pendants. Minimalist design for everyday elegance.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Gold Plated",
    color: "Gold",
    weight: "15g"
  },
  {
    id: 14,
    name: "Ruby Stone Bangles",
    price: 1999,
    originalPrice: 2799,
    category: "bangles",
    description: "Set of 2 bangles with embedded ruby stones. Rich gold finish with traditional craftsmanship.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Brass, Ruby Stones",
    color: "Gold & Red",
    weight: "60g"
  },
  {
    id: 15,
    name: "Silver Toe Rings",
    price: 399,
    originalPrice: 599,
    category: "rings",
    description: "Pair of traditional silver toe rings with carved patterns. Adjustable and comfortable fit.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Silver",
    color: "Silver",
    weight: "4g"
  },
  {
    id: 16,
    name: "Floral Maang Tikka",
    price: 899,
    originalPrice: 1299,
    category: "maangtikka",
    description: "Delicate floral design maang tikka with pearl drop. Essential bridal and festive accessory.",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Gold Plated, Pearl",
    color: "Gold & White",
    weight: "10g"
  },
  {
    id: 17,
    name: "Beaded Anklet",
    price: 549,
    originalPrice: 799,
    category: "anklet",
    description: "Colorful beaded anklet with ghungroo bells. Traditional and playful design.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Beads, Silver",
    color: "Multicolor",
    weight: "20g"
  },
  {
    id: 18,
    name: "Statement Ring",
    price: 1099,
    originalPrice: 1599,
    category: "rings",
    description: "Bold statement ring with large central stone. Contemporary design with traditional elements.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Brass, Stone",
    color: "Gold",
    weight: "12g"
  },
  {
    id: 19,
    name: "Bridal Choker Set",
    price: 5999,
    originalPrice: 8499,
    category: "necklace",
    description: "Complete bridal choker set with necklace, earrings, and maang tikka. Stunning Kundan and pearl work.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    inStock: true,
    featured: true,
    material: "Kundan, Pearl, Brass",
    color: "Gold & White",
    weight: "120g"
  },
  {
    id: 20,
    name: "Minimalist Hoops",
    price: 449,
    originalPrice: 699,
    category: "earrings",
    description: "Simple gold-plated hoop earrings. Versatile and comfortable for daily wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80"
    ],
    inStock: true,
    featured: false,
    material: "Gold Plated",
    color: "Gold",
    weight: "5g"
  }
];

export default products;
