import styles from "./css/menu.module.css"

export function Menu() {
    
    return <header className={styles.menu}>
            <div className={styles.menuContenido}>
                <h1 className={styles.title}>
                    Tienda en Linea
                </h1>
                <nav className={styles.items}>
                    <a href="#">Carrito</a>
                    <a href="#">Galeria</a>
                    <a href="#">Contactos</a>
                </nav>
            </div>
    </header>


}