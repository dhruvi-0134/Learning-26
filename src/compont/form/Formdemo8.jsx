import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo8 = () => {
    const {register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"});
    const password = watch("password")|| "";
    const hasMinlength = password.length >=8;
    const hasSmallLetter = /[a-z]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasnumber =/[0-9]/.test(password);
    const hasSpecialchar = /[!@#$%^*]/.test(password);
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is required*"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"Age is reqired*"
            },
            min:{
                value:7,
                message:"min age should be 7*"
            },
            max:{
                value:18,
                message:"max age should be 60*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            },
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message:"Invalid email format*"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"invalid contact number*"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:5,
                message:"min 5 char is requried*"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted*"
            }
        },
        promocodeValidator:{
            required:{
                value:true,
                message:"promocode is required*"
            },
            validate:(value) =>{
                return value === "2026"|| "invalid promocode*"
            }
        },
        hobbiesValidator:{
            validate:(value)=>{
                return value?.length >= 2 || "min 2 hobbies requried*"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"password is required*"
            }
        }

    };
    const submitHandler = (data)=> {
        alert("Form submitted Successfully");
        console.log(data);
    };
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student Registration Form</h1>
        <form  onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type="text"{...register("name",validationSchema.nameValidator)}></input>
                <p style={{color:"red"}}>{errors.name?.message}</p>
               
            </div>
            <div>
                <label>AGE:</label>
                <input type="number" {...register("age",validationSchema.ageValidator)}></input>
                <p style={{color:"red"}}>{errors.age?.message}</p>
            </div>
            <div>
                <label>EMAIL:</label>
                <input type="text" {...register("email",validationSchema.emailValidator)}></input>
                <p style={{color:"red"}}>{errors.email?.message}</p>
            </div>
            <div>
                <label>PASSWORD:</label>
                <input type="password"{...register("password",validationSchema.passwordValidator)}></input>
                <p style={{color:"red"}}>{errors.password?.message}</p>
                <div>
                    <p style={{ color:hasMinlength ?"green":"red"}}>
                        Minimum 8 characters
                    </p>
                    <p style={{color:hasSmallLetter ? "green":"red"}}>
                        One capital letter
                    </p>
                    <p style={{color:hasCapitalLetter ? "green":"red"}}>
                        One  number (0-9)
                    </p>
                    <p style={{color:hasnumber ? "green":"red"}}>
                        One small letter
                    </p>
                    <p style={{color:hasSpecialchar ? "green":"red"}}>
                        One spcial character(!@#$%^&*) 
                    </p>
                </div>
            </div>
            <div>
                <label>CONTACT:</label>
                <input type="text"{...register("contact",validationSchema.contactValidator)}></input>
                <p style={{color: "red"}}>{errors.contact?.message}</p>
            </div>
            <div>
                <label>ADDRESS:</label>
               <input type="text" {...register("address",validationSchema.addressValidator)}></input>
               <p style={{color:"red"}}>{errors.address?.message}</p>
            </div>
            <div>
                <label>PROMO CODE:</label>
                <input type="text"{...register("promocode",validationSchema.promocodeValidator)}></input>
                <p style={{ color:"red"}}>{errors.promocode?.message}</p>
               
            </div>
             <div>
                <label>HOBBIES:</label><br></br>
              Cricket <input type="checkbox"  value="cricket" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
             Travel <input type="checkbox" value="travel"{...register("hobbies",validationSchema.hobbiesValidator)}></input>
             Music <input type="checkbox" value="music"{...register("hobbies",validationSchema.hobbiesValidator)}></input>
             <p style={{color: "red"}}>{errors.hobbies?.message}</p> 
             </div>
             <div>
                <input type="submit"></input>
             </div>
        </form>

    </div>
  )
}
