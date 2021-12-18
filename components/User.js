import React from "react";
import Link from 'next/link'
import styles from "../styles/style.module.css"
import countryFlagEmoji from "country-flag-emoji";

export default function User({user,index}) {
  return (
    <div className={index%2===0? styles.userleft: styles.userright}>
       
        <div className={styles.image}>
        <Link href={`/${user.name}`}>
        <img src={user.picture_large} width="100%" alt="" />
        </Link>
        </div>    
        <div className={styles.content}>
       <h2>{user.name}</h2>
        <h3>{user.email} &#x1F4E7;</h3> 
        <p>{user.city}, {user.country} {countryFlagEmoji.get(user.nat).emoji}</p>
        
 
      </div>
      
    </div>
  );
}
