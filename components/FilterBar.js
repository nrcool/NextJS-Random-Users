"use client";
import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import styles from "../styles/FilterBar.module.css";
export default function FilterBar() {
  const { setSelect } = useContext(MyContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className={styles.options}>
        <div>Sort By:</div>
        <select
          className={styles.select}
          onChange={(e) => setSelect(e.target.value)}
          defaultValue="name"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="city">City</option>
          <option value="country">Country</option>
        </select>
      </div>
    </div>
  );
}
