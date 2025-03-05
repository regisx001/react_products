
async function Home() {
  const products = await (await fetch("http://localhost:8000/api/products/")).json()
  const categories = await (await fetch("http://localhost:8000/api/categories/")).json()

  return (
    <div className="">

      <h1>
        Products
      </h1>
      <pre className="pre">
        {JSON.stringify(products, null, 2)}
      </pre>

      <h1 >
        Categories
      </h1>
      <pre className="pre">
        {JSON.stringify(categories, null, 2)}
      </pre>

    </div>
  );
}



export default Home;
