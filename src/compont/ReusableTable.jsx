import React from 'react'

export const ReusableTable = (props) => {
  return (
    <div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {
              props.columns.map((col, index) => {
                return <th key={index}>{col.toUpperCase()}</th>
              })
            }
          </tr>
        </thead>

        <tbody>
          {
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  {
                    props.columns.map((col, i) => {
                      return <td key={i}>{item[col]}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
