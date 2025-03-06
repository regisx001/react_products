"use client"

import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden">
            <header className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${product?.image})` }}>
            </header>
            <Link href={"/" + product.id}>
                <article className="space-y-4 p-4">
                    <div>
                        <h3 className="h4 font-bold line-clamp-2">{product?.name}</h3>
                    </div>
                    <p className="opacity-60 line-clamp-4">
                        {product?.description}
                    </p>
                </article>
            </Link>

            <footer className="flex items-center justify-between gap-4 p-4">
                <span className="badge preset-filled-primary-500">{product?.category?.name}</span>
                <span className="font-bold text-lg">{product?.price}$</span>
                <button onClick={() => { console.log(product) }} className="btn z-0 preset-filled-primary-400-600">add</button>
            </footer>
        </div>
    )
}

export default ProductCard;