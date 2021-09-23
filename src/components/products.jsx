import products from "../productos.json";
import styles from "../css/products.module.css";

/**
 * Method showing products
 * @returns Struture HTML
 */
export function ShowProductos({onAdd}) {
    return <div className={styles.containerProducts}>
            {/* Products container */}

                <ul className={styles.productsGrid}>
                {/* Products list */}

                    {products.map((product) => (
                        // Products are obtained

                        // The data is shown
                        <li className={styles.products}>
                            <img className={styles.imgProducts} src={product.image} alt={product.description} />
                            <li>{product.name}</li>
                            <li>${product.price}</li>

                            {/* Buttons for each product */}
                            <button className={styles.btnAgregarCarrito} type="button" onClick={()=>onAdd(product)}>Agregar al carrito</button>
                            <button className={styles.btnView} type="button">Vista</button>
                        </li>
                    ))}
                </ul>
            </div>
}

/**
 * Method to call the add product button event
 * @param {*} event Event called
 * @returns Action to be performed.
 */
function addProductCart(event){
    console.log("Exito boton")
}