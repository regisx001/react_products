"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

function DetailPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch("http://localhost:8000/api/products/" + params.id)
            const data = await response.json()
            setProduct(data)
        }
        fetchProduct()
    }, [params.id])

    return (
        <main>
            <Link className="btn preset-filled-primary-500" href={"/"}>
                Return
            </Link>
            <pre className="pre">
                {JSON.stringify(product, null, 2)}
            </pre>
        </main>
    )
}

export default DetailPage