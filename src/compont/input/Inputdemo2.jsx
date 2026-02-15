import React, { useState } from 'react'

export const Inputdemo2 = () => {
    const[name,setname]=useState("")
    const[gender,setgender]=useState("")
    const[country,setcountry]=useState("")
    const[state,setstate]=useState("")
    const[submitted,setsubmitted]=useState(false)
    const stateData = {
        india:["Gujarat","Maharshtra","Rajasthan","gova"],
        usa:["California","Texas","Florida","NewYourk"],
        china:["Beijing","Shanghai","shenzhen"]
    }
    const nameHeadler =(event)=>{
        setname(event.target.value)
    }
    const genderHandler =(event)=>{
        setgender(event.target.value)
    }
    const submitHandler =()=>{
        setsubmitted(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Inputdemo2</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={nameHeadler}></input>
            {name}
        </div>
        <div>
            <label>GENDER:</label><br></br>
            MALE:<input type='radio' value="male" name='gender' onChange={genderHandler}></input>
           <br></br>
            FEMALE:<input type='radio' value="female"name='gender'onChange={genderHandler}></input>
            <h1>{gender}</h1>
        </div>
        <div>
            <label>COUNTRY</label>
            <select value={country} onChange={(event)=>{setcountry(event.target.value)}}>
                <option value="">Select Country</option>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
            {country}
        </div>
        <br>
        </br>
        {country && (
            <div>
                <label>STATE</label>
                <select onChange={(event)=>setstate(event.target.value)}>
                    <option value="">Select State</option>
                    {stateData[country].map((s,index)=>(
                        <option key={index} value={s}>{s}</option>
                    ))}
                </select>
            </div>
        )}
        <br/>
        <button onClick={submitHandler}>Submit</button>
         {submitted &&(
            <div>
                <h2>Output Section</h2>
                <p>Name:{name}</p>
                <p>Gender:{gender}</p>
                <p>Country:{country}</p>
                <p>State:{state}</p>
            </div>

         )}
    </div>

  )
}
