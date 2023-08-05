import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: Bihar</h2>
      <h3>contact: 7903802495</h3>
    </div>
  );
};

export default User;
