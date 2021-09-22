import { Menu } from "./menu";
import styles from "../css/inicio.module.css";
import { ShowProductos } from "./products";
import { ShoppingCart } from "./shoppingCart";
import "../index.css"

/**
 * Initial method that is in charge of give structure of home page
 * @returns Structure HTML
 */
export function Init() {
    
    return <div>
        {/* Modulo menu */}
        <Menu/>
        <main className={styles.containerInit}>
            {/* Modulo ShowProductos */}
            <ShowProductos/>
            {/* Modulo ShoppingCart */}
            <ShoppingCart />
        </main>
    </div>
}   