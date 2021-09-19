import products from "./productos.json"
export function showProductos(){
    return <div>
        <header>
            <h1>Productos</h1>
        </header>
        <main>
            <ul>
                {products.map((product) => (
                    <li>{product.name}</li>
                ))}
            </ul>
        </main>
    </div>
}