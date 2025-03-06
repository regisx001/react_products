import Link from "next/link";
import CreateProductForm from "@/lib/CreateProduct";



async function CreateProductPage() {
    return (
        <section className="py-10">
            <div>
                <Link href="/" className="btn preset-filled-primary-500">Return to products</Link>
            </div>
            <div className="mx-[20%] mt-10">
                <CreateProductForm />
            </div>
        </section>
    )
}


export default CreateProductPage;