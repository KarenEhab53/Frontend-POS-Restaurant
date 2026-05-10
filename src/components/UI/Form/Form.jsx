import React from "react";
import styles from "./Form.module.css";

const Form = ({ title, fields, buttonText, onSubmit, onClose }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      {title === "Add Category" && (
        <div className={styles.data}>
          <label>ADD Category Name</label>
          <input type="text" placeholder="Add Category Name" />
        </div>
      )}
      {title === "ingredients" && (
        <>
          {fields.map((field, index) => (
            <div className={styles.data} key={index}>
              <label>{field.label}</label>

              {field.type === "select" ? (
                <select name={field.name} defaultValue={field.value}>
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </>
      )}
      <button className={styles.submit} type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
