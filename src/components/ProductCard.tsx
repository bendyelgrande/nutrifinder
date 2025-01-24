interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const ProductCard = ({ name, description, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="aspect-square bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
          View Product
        </button>
      </div>
    </div>
  );
};