import React, { useState } from "react";

export const UserStateDemo3 = () => {
  const [users, setUsers] = useState(["parth", "raj"]);

  const addUser = () => {
    setUsers([...users, "dhruvi"]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USERSTATEDEMO3</h1>

      <ul>
        {users.map((u, index) => (
          <li key={index}>{u}</li>
        ))}
      </ul>

      <button onClick={addUser}>push</button>
    </div>
  );
};
