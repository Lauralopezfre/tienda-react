
import styles from "../css/shoppingCart.module.css";
import { AddProduct } from "./addProduct";

/**
 * Method that realizes the shopping cart structure.
 * @returns Struture HTML
 */
export function ShoppingCart({products, total}) {

    return <div className={styles.shoppingCart}>
        {/* Shopping cart container */}

        <div className={styles.title}><h1>Carrito de compras</h1></div>
        {/* Title container */}

        <div className={styles.content}>
        {/* Products container */}

        { products ?
        products.map((p, index) => (
            <AddProduct
                key = {index}
                image = {p.image}
                description = {p.description}
                name = {p.name}
                price = {p.price}
            />
        ))
        :null
        }
            
            
            <div className={styles.shopping_footer}>
            {/* Footer container */}
                <h3 className={styles.total}>{total}</h3>
                <button className={styles.btnConfirm}>Confirmar compra</button>
            </div>
        </div>
    </div>
}