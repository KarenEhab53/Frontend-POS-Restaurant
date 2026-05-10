import React from "react";
import styles from "./Table.module.css";
import { MdDelete, MdModeEdit } from "react-icons/md";

const Table = ({ fields, title }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          {title === "ingredients" && (
            <>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Min Quantity</th>
              <th>Status</th>
            </>
          )}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {fields.map((field, index) => (
          <tr key={index}>
            <td>{field.name}</td>

            {title === "ingredients" && (
              <>
                <td>{field.quantity}</td>
                <td>{field.unit}</td>
                <td>{field.minQuantity}</td>
                <td
                  className={
                    field.status === "Available" ? styles.Available : styles.Out
                  }
                >
                  {field.status}
                </td>
              </>
            )}

            <td className={styles.action}>
              <button className={styles.delete}>
                <MdDelete />
              </button>
              <button className={styles.update}>
                <MdModeEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
