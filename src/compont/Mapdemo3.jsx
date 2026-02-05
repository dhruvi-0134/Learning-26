import React from 'react'

export const Mapdemo3 = () => {
    var students = [
        {id:1,name:"ram",age:21,marks:78,city:"gandhinager",gender:"male"},
        {id:2,name:"sita",age:22,marks:80,city:"ahmedabad",gender:"female"},
        {id:3,name:"shiv",age:23,marks:50,city:"surat",gender:"male"}


        
]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Mapdemo3</h1>
        <table border = "2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                     <th>NAME</th>
                      <th>AGE</th>
                       <th>MARKS</th>
                        <th>CITY</th>
                         <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
       
    </div>
  )
}
