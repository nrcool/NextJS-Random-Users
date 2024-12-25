"use client";
import React from "react";
import styles from "../styles/style.module.css";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

export default function User({ user, index }) {
  return (
    <div className={index % 2 === 0 ? styles.userleft : styles.userright}>
      <h1>work</h1>
      {/*  <div className={styles.image}>
        <Image src={user.picture.large} width={500} height={500} />
      </div>
      <div className={styles.content}>
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <h3>{user.email} &#x1F4E7;</h3>
        <p>
          {user.location.city}, {user.location.country}{" "}
          <ReactCountryFlag
            countryCode={user.nat}
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title={user.nat}
          />
        </p>
      </div> */}
    </div>
  );
}
