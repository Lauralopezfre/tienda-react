
import styles from "../css/addProduct.module.css";  

/**
 * Method of adding products to the cart
 * @returns Struture HTML
 */
export function AddProduct({image, description, price, name}){
    return (
        <div className={styles.product_item}>
        {/* Product container */}   
        
                <div className={styles.content_img}>
                {/* Image container */}
                    <img className={styles.imgProduct} src={image} alt={description}/>
                </div>
                
                <div className={styles.product_content}>
                {/* Data product container */}
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
            </div>
    )
}