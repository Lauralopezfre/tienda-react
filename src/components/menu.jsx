import styles from "../css/menu.module.css"

/**
 * Method that creates menu.
 * @returns Structure HTML
 */
export function Menu() {
    
    return <header className={styles.menu}>
            {/* Header container */}

            <div className={styles.menuContenido}>
                {/* Menu container */}

                <h1 className={styles.title}>
                    Tienda en Linea
                </h1>

                {/* Navegation */}
                <nav className={styles.items}>
                    <a href="#">Carrito</a>
                    <a href="#">Galeria</a>
                    <a href="#">Contactos</a>
                </nav>
            </div>
    </header>


}