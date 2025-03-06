declare global {
    interface Product {
        id: number,
        name: string,
        description: string,
        price: number,
        image: string,
        category: {
            id: number,
            name: string,
        }
    }
    interface Category {
        id: number,
        name: string,
    }
}
export default global;