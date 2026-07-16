// src/data/products.js

const products = [
  {
    id: 1,
    name: "Elegant Pearl Necklace",
    description: "Handcrafted pearl necklace with delicate gold-plated chain. Perfect for weddings and special occasions.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: true,
    inStock: true,
    materials: ["Pearls", "Gold-plated brass"],
    dimensions: "16-18 inches adjustable"
  },
  {
    id: 2,
    name: "Rose Gold Teardrop Earrings",
    description: "Beautiful teardrop earrings with rose gold finish and crystal accents. Lightweight and comfortable for all-day wear.",
    price: 899,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    category: "earrings",
    featured: true,
    inStock: true,
    materials: ["Rose gold-plated copper", "Crystals"],
    dimensions: "1.5 inches length"
  },
  {
    id: 3,
    name: "Boho Beaded Bracelet Set",
    description: "Set of 3 handmade beaded bracelets with natural stones and wooden beads. Bohemian style perfect for everyday wear.",
    price: 649,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: true,
    inStock: true,
    materials: ["Natural stones", "Wooden beads", "Elastic cord"],
    dimensions: "7 inches (stretchable)"
  },
  {
    id: 4,
    name: "Vintage Coin Statement Necklace",
    description: "Bold statement necklace featuring antique-finish coin charms. Makes a striking addition to any outfit.",
    price: 1799,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: true,
    materials: ["Antique brass", "Metal coins"],
    dimensions: "18 inches + 2 inch extender"
  },
  {
    id: 5,
    name: "Minimalist Hoop Earrings",
    description: "Classic gold hoop earrings with hammered texture. Simple yet elegant design suitable for any occasion.",
    price: 599,
    image: "https://images.unsplash.com/photo-1628530982452-1bb171e9db92?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Gold-plated brass"],
    dimensions: "1 inch diameter"
  },
  {
    id: 6,
    name: "Turquoise Stone Pendant Necklace",
    description: "Genuine turquoise stone set in silver-toned metal. Each stone is unique with natural variations.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: true,
    inStock: true,
    materials: ["Turquoise stone", "Silver-plated brass"],
    dimensions: "20 inches chain with 2 inch pendant"
  },
  {
    id: 7,
    name: "Crystal Chandelier Earrings",
    description: "Glamorous chandelier earrings with sparkling crystals. Perfect for parties and formal events.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Crystals", "Silver-plated metal"],
    dimensions: "2.5 inches length"
  },
  {
    id: 8,
    name: "Leather Wrap Bracelet",
    description: "Multi-wrap leather bracelet with metal beads and magnetic clasp. Unisex design with rustic charm.",
    price: 799,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Genuine leather", "Metal beads"],
    dimensions: "Adjustable, wraps 2-3 times"
  },
  {
    id: 9,
    name: "Gold Chain Layered Necklace",
    description: "Trendy layered necklace set with three delicate gold chains of varying lengths. Can be worn together or separately.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: true,
    materials: ["Gold-plated stainless steel"],
    dimensions: "14, 16, 18 inches"
  },
  {
    id: 10,
    name: "Stud Earrings Collection",
    description: "Set of 5 pairs of stud earrings in various designs. Perfect starter set or gift option.",
    price: 999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Mixed metals", "Crystals", "Pearls"],
    dimensions: "Various sizes (5mm-8mm)"
  },
  {
    id: 11,
    name: "Charm Bracelet with Heart Pendant",
    description: "Delicate chain bracelet with heart charm and adjustable clasp. Sweet and feminine design.",
    price: 549,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Silver-plated brass"],
    dimensions: "7-8 inches adjustable"
  },
  {
    id: 12,
    name: "Black Onyx Statement Necklace",
    description: "Bold necklace featuring large black onyx stones. Modern and sophisticated piece that makes a statement.",
    price: 2199,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: false,
    materials: ["Black onyx stones", "Brass"],
    dimensions: "16 inches + 3 inch extender"
  },
  {
    id: 13,
    name: "Feather Drop Earrings",
    description: "Lightweight feather-shaped earrings with metallic finish. Bohemian style perfect for festival season.",
    price: 699,
    image: "https://images.unsplash.com/photo-1628530982452-1bb171e9db92?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Metal alloy", "Enamel coating"],
    dimensions: "2 inches length"
  },
  {
    id: 14,
    name: "Crystal Bangle Set",
    description: "Set of 3 bangles with embedded crystals. Stackable design that catches the light beautifully.",
    price: 1399,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Crystals", "Gold-plated metal"],
    dimensions: "2.6 inch diameter"
  },
  {
    id: 15,
    name: "Moonstone Pendant Necklace",
    description: "Ethereal moonstone pendant with silver chain. The stone displays a beautiful adularescence effect.",
    price: 1699,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: true,
    inStock: true,
    materials: ["Moonstone", "Sterling silver"],
    dimensions: "18 inches chain with 0.8 inch pendant"
  },
  {
    id: 16,
    name: "Geometric Dangle Earrings",
    description: "Modern geometric design with mixed metal finish. Lightweight and contemporary style.",
    price: 849,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Brass", "Copper"],
    dimensions: "1.8 inches length"
  },
  {
    id: 17,
    name: "Macrame Friendship Bracelet",
    description: "Handwoven macrame bracelet with adjustable sliding knot. Available in multiple color combinations.",
    price: 399,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Waxed cord", "Metal beads"],
    dimensions: "Adjustable 6-9 inches"
  },
  {
    id: 18,
    name: "Vintage Locket Necklace",
    description: "Antique-style oval locket that opens to hold photos. Romantic and timeless piece with intricate engraving.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: true,
    materials: ["Brass with antique finish"],
    dimensions: "22 inches chain with 1 inch locket"
  },
  {
    id: 19,
    name: "Pearl Stud Earrings",
    description: "Classic freshwater pearl studs with gold posts. Timeless elegance for everyday wear.",
    price: 749,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    category: "earrings",
    featured: true,
    inStock: true,
    materials: ["Freshwater pearls", "Gold-plated posts"],
    dimensions: "7mm pearls"
  },
  {
    id: 20,
    name: "Evil Eye Protection Bracelet",
    description: "Traditional evil eye charm bracelet with blue glass beads. Believed to bring protection and good luck.",
    price: 599,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Glass beads", "Gold-plated chain"],
    dimensions: "7 inches + 1 inch extender"
  },
  {
    id: 21,
    name: "Tassel Statement Necklace",
    description: "Colorful tassel necklace with beaded detail. Fun and vibrant piece perfect for summer outfits.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: true,
    materials: ["Silk tassels", "Glass beads", "Metal chain"],
    dimensions: "20 inches with 3 inch tassel"
  },
  {
    id: 22,
    name: "Minimalist Bar Earrings",
    description: "Sleek vertical bar earrings in brushed gold finish. Perfect for professional and casual settings.",
    price: 649,
    image: "https://images.unsplash.com/photo-1628530982452-1bb171e9db92?w=500&h=500&fit=crop",
    category: "earrings",
    featured: false,
    inStock: true,
    materials: ["Gold-plated stainless steel"],
    dimensions: "1.2 inches length"
  },
  {
    id: 23,
    name: "Rose Quartz Healing Bracelet",
    description: "Natural rose quartz beads on elastic cord. Known as the stone of love and emotional healing.",
    price: 899,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    category: "bracelets",
    featured: false,
    inStock: true,
    materials: ["Rose quartz", "Elastic cord"],
    dimensions: "7 inches (stretchable)"
  },
  {
    id: 24,
    name: "Infinity Symbol Necklace",
    description: "Delicate infinity pendant symbolizing eternal love. Simple and meaningful gift option.",
    price: 799,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop",
    category: "necklaces",
    featured: false,
    inStock: true,
    materials: ["Sterling silver"],
    dimensions: "16 inches + 2 inch extender"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "necklaces", name: "Necklaces" },
  { id: "earrings", name: "Earrings" },
  { id: "bracelets", name: "Bracelets" }
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getInStockProducts = () => {
  return products.filter(product => product.inStock);
};

export default products;
