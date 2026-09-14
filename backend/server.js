import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Flipkart Clone Backend is Running!");
});

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "iPhone 15",
            price: 69999
        },
        {
            id: 2,
            name: "Samsung Galaxy S24",
            price: 74999
        },
        {
            id: 3,
            name: "Sony Headphones",
            price: 9999
        }
    ];

    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});