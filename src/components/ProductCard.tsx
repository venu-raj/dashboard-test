export default function ProductCard({ product }) {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-500 mt-2">${product.price}</p>
      </div>
    );
  }
  