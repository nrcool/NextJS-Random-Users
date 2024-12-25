"use client";
import React, { useEffect, useState } from "react";
import { MyContext } from "./Context";

export default function Container({ children }) {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [about, setAbout] = useState(false);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [select, setSelect] = useState("name");

  useEffect(() => {
    fetch(`api/users/${page}`)
      .then((res) => res.json())
      .then((final) => {
        setData(final.result);
        setUsers([...users, ...final.result.users]);
        setUpdatedUsers([...users, ...final.result.users]);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    setUpdatedUsers(
      users.sort((a, b) => {
        if (select === "name") {
          return a.name.first > b.name.first
            ? 1
            : b.name.first > a.name.first
            ? -1
            : 0;
        } else if (select === "email") {
          return a.email > b.email ? 1 : b.email > a.email ? -1 : 0;
        } else if (select === "city") {
          return a.location.city > b.location.city
            ? 1
            : b.location.city > a.location.city
            ? -1
            : 0;
        } else if (select === "country") {
        }
        return a.location.country > b.location.country
          ? 1
          : b.location.country > a.location.country
          ? -1
          : 0;
      })
    );
  }, [select]);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        updatedUsers,
        setUsers,
        loading,
        setLoading,
        page,
        setPage,
        about,
        setAbout,
        setSelect,
        select,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
