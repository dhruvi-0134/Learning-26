import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const Employeeslist = (props) => {
  console.log("emplist", props);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee List</h1>

      {/* Title */}
      <h2>{props.title}</h2>

      {/* Company Info */}
      <h3>{props.company.name}</h3>
      <h4>{props.company.year}</h4>

      {/* Employee Table */}
      <table className="table" style={{ width: "60%", margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          {props.employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  );
};
