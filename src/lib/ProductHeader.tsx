"use client"
import Link from "next/link"
import FilteringSelect from "./FilteringSelect"
import { useState } from "react"



const ProductHeader = ({ categories }: { categories: Category[] }) => {
    const [category, setCategory] = useState("")

    return (
        <div className="flex my-4 flex-row justify-between items-center">

            <h1 className="h1 font-bold">
                Products {category}
            </h1>
            <FilteringSelect setCategory={setCategory} categories={categories} />
            <Link href="/create" className="btn  preset-filled-primary-500" >
                New Product
            </Link>
        </div>
    )
}


export default ProductHeader