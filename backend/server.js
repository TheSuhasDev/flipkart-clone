import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Flipkart Clone Backend is Running!");
});

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "iPhone 15",
      price: 59999,
      image: "https://example.com/iphone.jpg",
      category: "Mobiles",
      rating: 4.5
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999,
      image: "https://example.com/samsung.jpg",
      category: "Mobiles",
      rating: 4.4
    },
    {
      id: 3,
      name: "Sony Headphones",
      price: 2999,
      image: "https://example.com/headphones.jpg",
      category: "Electronics",
      rating: 4.2
    }
  ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});