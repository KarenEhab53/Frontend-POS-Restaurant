import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, onAdd }) => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.cards}>
          <div key={product.id} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.info}>
                <h3>{product.name}</h3>
                <p>Price: {product.price} EGP</p>
              </div>
              <p
                className={
                  product.available ? styles.available : styles.notAvailable
                }
              >
                {product.available ? "Available" : "Not Available"}
              </p>
            </div>
            <button onClick={() => onAdd(product)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
