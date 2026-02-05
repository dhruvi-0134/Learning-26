import React from 'react'

export const Mapdemo6 = () => {
    var employees= [
       {id:1,name:"Ram",dept:"HR",salary:25000,city:"Delhi"},
       {id:2,name:"kiran",dept:"IT",salary:30000,city:"Pune"},
       {id:1,name:"Rohit",dept:"Sales",salary:23000,city:"Mumbai"},
       {id:1,name:"Mita",dept:"HR",salary:24000,city:"Delhi"},
       {id:1,name:"Vikas",dept:"IT",salary:20000,city:"Surat"},
       {id:1,name:"Nita",dept:"Sales",salary:10000,city:"Indore"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <table border="2" textAlign = "center">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Salary</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employe)=>{
                      return<tr>
                        <td>{employe.id}</td>
                        <td>{employe.name}</td>
                        <td>{employe.dept}</td>
                        <td style={{color:employe.salary>22000&&"Red"}}>{employe.salary}</td>
                        <td>{employe.city}</td>
                      </tr>

                     
                    })
                }
            </tbody>
        </table>
        <h1>
            Mapdemo6
        </h1>

    </div>
  )
}
