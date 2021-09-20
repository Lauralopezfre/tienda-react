
import styles from "./css/shoppingCart.module.css"

export function ShoppingCart(){
    return <div className={styles.shoppingCart}>
        <div className={styles.title}><h1>Carrito de compras</h1></div>
		<ul className={styles.products}>
		</ul>
    </div>
}