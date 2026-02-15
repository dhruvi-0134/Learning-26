import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo3 = () => {
  const { register,handleSubmit}=useForm()
  const [employeeData,setemployeeData]=useState({})
  const[issubmited,setissubmited]=useState(false)
  const submitHandler = (data)=>{
    console.log(data)
    setemployeeData(data)
    setissubmited(true)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORMDEMO3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Employee Name</label>
            <input
               type ='text'
               placeholder='Enter emploee name'
               {...register("employeeName")}>
               </input>
          </div>
          <div>
            <label>Employee ID</label>
            <input 
              type='number'
              placeholder='Enter employee Id'
              {...register("employeeId")}>
            </input>
          </div>
          <div>
            <label>Department</label>
            <select {...register("department")}>
              <option value="">Select Department</option>
              <option value="hr">HR</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <div>
            <label>Joining Date</label>
            <input
                 type='date'
                 {...register("joiningDate")}>

                 </input>
          </div>
          <div>
            <label>Upload Resume</label>
            <input 
                  type='file'
                  {...register("resume")}>
            </input>
          </div>
          <div>
            <input type='submit'>
            </input>
          </div>
        </form>
        {
          issubmited && 
          <div>
            <h1>OUTPUT</h1>
            <h2>Name ={employeeData.employeeName}</h2>
            <h2>ID = {employeeData.employeeId}</h2>
            <h2>Department ={employeeData.department}</h2>
            <h2>Joining Date ={employeeData.joiningDate}</h2>
           <h2>
            Resume = {
              employeeData.resume && employeeData.resume.length> 0
              ? employeeData.resume[0].name
              : "No File"
            }
           </h2>
           </div>
        }
    </div>
  )
}
