import styles from "./Sidebar.module.css";
import menuItems from "../../../menuItems";
import Categories from "../../../components/Category/Categories";

const Sidebar = ({ category, setCategory }) => {
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  return (
    <div className={styles.sidebar}>
      <h1>Categories</h1>

      {categories.map((cat, index) => (
        <Categories
          key={index}
          category={cat}
          isActive={category === cat}
          onClick={() => setCategory(cat)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
