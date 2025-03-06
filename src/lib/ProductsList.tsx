'use client'
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";

const ProductsList = ({ categories }: { categories: Category[] }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:8000/api/products?category=" + category, {
            });
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [category]);

    return (
        <main>
            <ProductHeader onCategoryChange={(value) => { setCategory(value) }} categories={categories} />

            <section className="grid grid-cols-4 gap-4">
                {products.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </section>
        </main>
    );
};

export default ProductsList;