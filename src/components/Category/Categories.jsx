import React from "react";
import style from "./Category.module.css";

const Categories = ({ category, isActive,onClick }) => {
  return <li onClick={onClick} className={isActive ? style.active : ""}>{category}</li>;
};

export default Categories;
