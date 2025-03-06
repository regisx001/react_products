"use client"
import Link from "next/link"
import { useState } from "react"



const ProductHeader = ({ categories, onCategoryChange }: { categories: Category[], onCategoryChange: (category: string) => void }) => {


    const handleCategoryChange = (newCategory: string) => {
        onCategoryChange(newCategory)
    }

    return (
        <div className="flex my-4 flex-row justify-between items-center">
            <h1 className="h1 font-bold">
                Products
            </h1>
            {/* <FilteringSelect setCategory={handleCategoryChange} categories={categories} /> */}
            <select onChange={(event) => {
                console.log(event.target.value)
                handleCategoryChange(event.target.value)
            }} className="select w-44" name="category" id="">
                <option value="">clear</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>

                ))}
            </select>
            <Link href="/create" className="btn preset-filled-primary-500">
                New Product
            </Link>
        </div>
    )
}


export default ProductHeader