
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";



async function ProductsList({ categories }: { categories: Category[] }) {
    const products: Product[] = await (await fetch("http://localhost:8000/api/products/")).json()

    return (
        <main>

            <ProductHeader categories={categories} />
            <section className="grid grid-cols-4 gap-4">
                {/* <pre className="pre">
                {JSON.stringify(products, null, 2)}
                </pre> */}
                {products.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))
                }
            </section >
        </main>

    )
}

export default ProductsList;