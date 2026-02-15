import React from 'react'
import { ReusableTable } from './ReusableTable';

export const Studentlist = () => {
  const columns = ["id", "name", "age"];

  const student = [
    { id: 1, name: "Dhruvi", age: 20 },
    { id: 2, name: "Hetvi", age: 23 },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ReusableTable columns={columns} data={student}></ReusableTable>
    </div>
  )
}
