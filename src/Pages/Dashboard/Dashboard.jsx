import React, { useState } from "react";
import Sidebar from "../../components/Dashboard Cashier/Sidebar/Sidebar";
import Product from "../../components/Dashboard Cashier/Products/Product";
import menuItems from "../../menuItems";
import styles from "./Dashboard.module.css";
import Cart from "../../components/Dashboard Cashier/Cart/Cart";

const Dashboard = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing)
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const filteredProducts = menuItems
    .filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "All" || product.category === category;
      return matchSearch && matchCategory;
    })
    .map((product) => (
      <Product key={product.id} product={product} onAdd={addToCart} />
    ));

  return (
    <>
      <div className={styles.dashboard}>
        <Sidebar category={category} setCategory={setCategory} />

        <div className={styles.container}>
          <div className={styles.search}>
            <h1>Menu Items</h1>
            <input
              type="text"
              placeholder="search for a meal.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.product}>{filteredProducts}</div>
        </div>

        <Cart
          cartItems={cartItems}
          onUpdateQuantity={(id, delta) =>
            setCartItems((prev) =>
              prev
                .map((i) =>
                  i.id === id ? { ...i, quantity: i.quantity + delta } : i,
                )
                .filter((i) => i.quantity > 0),
            )
          }
          onRemove={(id) =>
            setCartItems((prev) => prev.filter((i) => i.id !== id))
          }
          onClear={() => setCartItems([])}
          onConfirm={() => alert("Order confirmed!")}
        />
      </div>
    </>
  );
};

export default Dashboard;
