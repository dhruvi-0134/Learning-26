import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors)
    const validationschema ={
        agevalidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18*"
            },
            max:{
                  value:60,
                  message:"max age should be 60*"
            }
        },
        addressvalidator:{
            required:{
                value:true,
                message:"address is required"
            },
            minLength:{
                value:5,
                message:"min 5 char is requried"

            },
            maxLength:{
                value:20,
                message:"max 20 char is requried"
            }
        },
        cityValidator:{
            required:{
                value:true,
                message:"city is required*"
            },
            minLength:{
                value:7,
                message:"min  7 char is required "
                
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted*****"
            }
        },
        stateValidator:{
            required:{
                value:true,
                message:"State is requried*"
            },
            minLength:{
                value:10,
                message:"min 10 char is required*"
            },
            maxLength:{
                value:30,
                message:"max 30 char is required*"

            }
           
        }
    }
         
   
    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Formdemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type ='text'{...register("name",{required:{value:true,message:"Name is requried"}})}>
                </input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text'{...register("age",validationschema.agevalidator)}>
                </input>
                {errors.age&&errors.age.message}
            </div>
            <div>
                <label>ADD</label>
                <input type='text'{...register("add",validationschema.addressvalidator)}>
                </input>
                {errors.add?.message}
            </div>
            <label>City Name</label>
            <input type ='text'{...register("city",validationschema.cityValidator)}>
            </input>
            {errors.city?.message}
            <div>
                <label>State Name</label>
                <input type ='text'{...register("state",validationschema.stateValidator)}>
                </input>
                {errors.state?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
