'use client'



const FilteringSelect = ({ categories, setCategory }: { categories: Category[], setCategory: any }) => {

    return (
        <select onChange={(event) => {
            console.log(event.target.value)
            setCategory(event.target.value)
        }} className="select w-44" name="category" id="">
            {categories.map((category, index) => (
                <option value={category.id}>
                    {category.name}
                </option>

            ))}
        </select>
    )
}


export default FilteringSelect