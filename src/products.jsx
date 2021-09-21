import products from "./productos.json";
import styles from "./css/products.module.css";

export function MostrarProductos() {
    return <div className={styles.containerProducts}>
                
                <ul className={styles.productsGrid}>

                    {products.map((product) => (

                        <li className={styles.products}>
                            <img className={styles.imgProducts} src={product.image} alt={product.description} />
                            <li>{product.name}</li>
                            <li>${product.price}</li>
                            <button className={styles.btnAgregarCarrito} type="button" onClick={addProduct}>Agregar al carrito</button>
                            <button className={styles.btnView} type="button">Vista</button>
                        </li>
                    ))}
                </ul>
            </div>
}

function addProduct(){
    console.log("Exito boton")
    return ({
        
    })
}