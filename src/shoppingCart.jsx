
import styles from "./css/shoppingCart.module.css";
import { AddProduct } from "./addProduct";

export function ShoppingCart() {
    return <div className={styles.shoppingCart}>
        <div className={styles.title}><h1>Carrito de compras</h1></div>
        <div className={styles.content}>

            <AddProduct/>

            <div className={styles.shopping_footer}>
                <h3 className={styles.total}>Total: $1250</h3>
                <button className={styles.btnConfirm}>Confirmar compra</button>
            </div>
        </div>
    </div>
}