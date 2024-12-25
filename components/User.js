import React from "react";
import Link from "next/link";
import styles from "../styles/style.module.css";
import countryFlagEmoji from "country-flag-emoji";

export default function User({ user, index }) {
  return (
    <div className={index % 2 === 0 ? styles.userleft : styles.userright}>
      <div className={styles.image}>
        <Link href={`/${user.name.first}`}>
          <img src={user.picture.large} width="100%" alt="" />
        </Link>
      </div>
      <div className={styles.content}>
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <h3>{user.email} &#x1F4E7;</h3>
        <p>
          {user.location.city}, {user.location.country}{" "}
          {countryFlagEmoji.get(user.nat).emoji}
        </p>
      </div>
    </div>
  );
}
