import { Menu } from "./menu";
import React from "react";
import {useState} from "react";
import styles from "../css/inicio.module.css";
import { ShowProductos } from "./products";
import { ShoppingCart } from "./shoppingCart";
import "../index.css"

/**
 * Initial method that is in charge of give structure of home page
 * @returns Structure HTML
 */
export function Init() {
    
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0);    

    function calculateTotal(){
        let t = 0;
        if(products){
            for(let i=0; i<products.length; i++){
                t+= products[i].price;
            }

            setTotal(t);
        }else{
            setTotal(0);
        }
    }

    function addProduct(product){
        let p = products;
        p.push(product)
        setProducts(p);
        calculateTotal();
    }

    return <div>
        {/* Modulo menu */}
        <Menu/>
        <main className={styles.containerInit}>
            {/* Modulo ShowProductos */}
            <ShowProductos
                onAdd = {addProduct}/>
            {/* Modulo ShoppingCart */}
            <ShoppingCart 
                products = {products}
                total = {total}/>
        </main>
    </div>
  
}