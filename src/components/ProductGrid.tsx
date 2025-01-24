import { ProductCard } from "./ProductCard";

const mockProducts = [
  {
    name: "Pain Relief Tablets",
    description: "Fast acting pain relief for headaches and body aches.",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Cold & Flu Syrup",
    description: "Multi-symptom relief for cold and flu symptoms.",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Allergy Relief",
    description: "24-hour relief from seasonal allergy symptoms.",
    imageUrl: "/placeholder.svg",
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};