import { createProduct } from "@/lib/actions"






const CreateProductForm = async () => {
    const categories: Category[] = await (await fetch("http://localhost:8000/api/categories/")).json()

    return (
        <form action={createProduct} className="card bg-surface-100-900 p-10 flex flex-col gap-6" encType="multipart/form-data">
            <h1 className="h1 font-bold">Create New Products</h1>
            <input type="text" className="input py-6" name="name" placeholder="Products name ..." />
            <textarea name="description" className="textarea" rows={4} placeholder="Products Description ..." >
            </textarea>
            <select className="select" name="category" id="">
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input type="file" name="image" multiple />
            <input className="input" type="number" name="price" />
            <button type="submit" className="btn preset-filled-primary-500">
                Create
            </button>
        </form>
    )
}


export default CreateProductForm;