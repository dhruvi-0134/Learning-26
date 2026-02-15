import React from "react";
import { Employeeslist } from "./Employeeslist";

export const Employees = () => {
  var title = "EMPLOYEE APP";

  var company = {
    name: "TCS",
    year: 2026,
  };

  var employee = [
    { id: 101, name: "Dhruvi", age: 22 },
    { id: 102, name: "Hetvi", age: 23 },
    { id: 103, name: "Daksh", age: 19 },
    { id: 104, name: "Bhavya", age: 14 },
    { id: 105, name: "Shree", age: 3 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>

      <Employeeslist
        title={title}
        company={company}
        employees={employee}
      />
    </div>
  );
};
