"use server"


export async function createProduct(formData: FormData) {

    const response = await fetch("http://localhost:8000/api/products/", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })

    console.log(await response.json())
}