import Products from "../lib/ProductsList"


async function Home() {

  const categories = await (await fetch("http://localhost:8000/api/categories/")).json()

  return (
    <section className="py-10" >


      <Products categories={categories} />

      <h1 >
        Categories
      </h1>
      <pre className="pre">
        {JSON.stringify(categories, null, 2)}
      </pre>
    </section>
  );
}
export default Home;
