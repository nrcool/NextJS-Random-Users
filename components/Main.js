import React from "react";
import FilterBar from './FilterBar'
import Users from './Users'
export default function Main() {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          borderBottom: "5px solid gray",
          borderTop: "5px solid gray",
        }}
      >
        Random Users&#x1F9D1;&#x200D;&#x1F91D;&#x200D;&#x1F9D1; Hub{" "}
      </h2>
      <FilterBar />
      <Users />
    </div>
  );
}
