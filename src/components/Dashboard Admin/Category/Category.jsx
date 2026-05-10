import React, { useState } from "react";
import styles from "./Category.module.css";
import menuItems from "../../../menuItems";
import Form from "../../UI/Form/Form";
import Modal from "../../UI/Form/Model/Model";
import Table from "../../UI/Table/Table";
import { FaPlus } from "react-icons/fa";

const Category = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.category}>
      <div className={styles.data}>
        <h1>Category Management</h1>
        <button onClick={() => setShowForm(true)}>
          <FaPlus />
          Add Category
        </button>
      </div>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <Form
            title="Add Category"
            fields={menuItems.categoryData}
            buttonText="Save"
            onClose={() => setShowForm(false)}
          />
        </Modal>
      )}

      <section>
        <Table title="category" fields={menuItems.categoryData} />
      </section>
    </div>
  );
};

export default Category;
