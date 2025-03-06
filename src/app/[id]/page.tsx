import Link from "next/link"




async function DetailPage({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = await (await fetch("http://localhost:8000/api/products/" + id)).json()
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