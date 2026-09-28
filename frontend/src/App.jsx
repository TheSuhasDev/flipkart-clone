import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Flipkart Clone</h1>

      <div className="product-grid">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
    </div>
  );
}

export default App;