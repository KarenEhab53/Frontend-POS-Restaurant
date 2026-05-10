import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';

const links = [
    { icon: "bi bi-columns-gap", title: "Dashboard", path: "/" },
    { icon: "bi bi-box-seam", title: "Ingredients", path: "/ingredients" },
    { icon: "bi bi-bag-dash", title: "Products", path: "/products" },
    { icon: "fa-solid fa-clipboard-list", title: "Orders", path: "/orders" },
    { icon: "fa-solid fa-warehouse", title: "Category", path: "/category" },
];

export default function Sidebar() {
    return (
        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <p>Restaurant POS</p>
            <nav>
                {links.map((link, index) => (
                    <NavLink
                        to={link.path}
                        key={index}
                        end={link.path === "/"}
                        className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                    >
                        <i className={link.icon}></i>
                        <span>{link.title}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
