import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>₹{product.price}</p>

      <p>⭐ {product.rating}</p>

      <p>{product.category}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;