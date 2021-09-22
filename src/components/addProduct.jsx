import products from "../productos.json";
import styles from "../css/addProduct.module.css";  

/**
 * Method of adding products to the cart
 * @returns Struture HTML
 */
export function AddProduct(){
    return (
        <div className={styles.product_item}>
        {/* Product container */}   
        
                <div className={styles.content_img}>
                {/* Image container */}
                    <img className={styles.imgProduct} src={products[0].image} alt={products[0].description}/>
                </div>
                
                <div className={styles.product_content}>
                {/* Data product container */}
                    <h3>{products[0].name}</h3>
                    <p>${products[0].price}</p>
                </div>
            </div>
    )
}