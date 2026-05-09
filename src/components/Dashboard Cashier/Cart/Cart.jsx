import React from "react";
import styles from "./Cart.module.css";

const Cart = ({
  cartItems,
  onUpdateQuantity,
  onRemove,
  onClear,
  onConfirm,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>🛒 Current Order</h2>
      <hr />

      <div className={styles.items}>
        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <p>No items in cart</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.name}>{item.name}</span>
              <div className={styles.controls}>
                <button onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
              </div>
              <span className={styles.price}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className={styles.remove}
                onClick={() => onRemove(item.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <hr />
      <div className={styles.total}>
        <span>Total:</span>
        <span className={styles.totalAmount}>${total.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.cancelBtn} onClick={onClear}>
          Cancel
        </button>
        <button
          className={styles.confirmBtn}
          onClick={onConfirm}
          disabled={cartItems.length === 0}
        >
           Confirm
        </button>
      </div>
    </div>
  );
};

export default Cart;
