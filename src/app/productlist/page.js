
async function productlist() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

export default async function Page () {
    let products = await productlist()
    console.log(products)
    return (
        <div>
            <h1>Product List </h1>
            {
                products.map((item, index) => (
                    <div key={index}>
                        <h3>Name: {item.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}