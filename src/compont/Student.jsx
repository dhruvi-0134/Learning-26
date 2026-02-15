import React from 'react'
import { Studentlist } from './Studentlist'

export const Student = () => {
  var title = "STUDENT APP"

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <Studentlist />
    </div>
  )
}
