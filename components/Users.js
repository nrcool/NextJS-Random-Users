"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../context/Context";

import User from "./User";
/* export const getStaticProps=async ()=>{
    const res= await fetch("http://localhost:3000/api/users")
    const result= await res.json()
    return {props:{users:result.users}}
} */
export default function Users() {
  const {
    data,
    users,
    updatedUsers,
    setUsers,
    loading,
    setLoading,
    page,
    setPage,
  } = useContext(MyContext);
  const refUser = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entity) => {
        console.log(entity);
        if (entity[0].isIntersecting) {
          setLoading(true);
          console.log("ok");
          setPage((page) => page + 1);
        } else {
          console.log("no");
        }
      },
      { rootMargin: "20px" }
    );
    refUser.current && observer.observe(refUser.current);
  }, []);

  return (
    <div className="users">
      {updatedUsers.map((user, index) => {
        return <User key={user.name.first} user={user} index={index} />;
      })}
      <span className="loading" ref={refUser}>
        {loading
          ? "Loading ..."
          : data && data.page > 0
          ? "more user ..."
          : null}
        .
      </span>
    </div>
  );
}
