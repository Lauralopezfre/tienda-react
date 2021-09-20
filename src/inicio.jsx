import { Menu } from "./menu";
import styles from "./css/inicio.module.css";
import { MostrarProductos } from "./products";
import { ShoppingCart } from "./shoppingCart";
import "./index.css"

export function Init() {
    return <div><Menu/>
        <main className={styles.containerInit}>   
            <MostrarProductos/>
            <ShoppingCart />
        </main>
    </div>
}   