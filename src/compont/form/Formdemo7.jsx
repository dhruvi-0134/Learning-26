import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo7 = () => {

  const { register, handleSubmit, formState: { errors }, watch } =
    useForm({ mode: "onChange" });

  const password = watch("password") || "";

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "password is required*",
      },
    },
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "confirm password is required*"
      },
      validate: (value) => {
        return value === password
          ? true
          : "Passwords do not match*"
      }
    }
  };

  const submitHandler = (data) => {
    console.log(data);
  };
   const hasMinLength = password.length >= 8;
   const hasSmallLetter = /[a-z]/.test(password);
   const hasCapitalLetter =/[A-Z]/.test(password);
   const hasNumber = /[0-9]/.test(password);
   const hasSpecialchar =/[!@#$%^&*]/.test(password);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Formdemo7</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          />
          <p style={{color:"red"}}>{errors.password?.message}</p>
          <div>
            <p style={{color:hasMinLength?"green":"red"}}>
              Minimum 8 characters
            </p>
            <p style={{color:hasSmallLetter?"green":"red"}}>
              At least one small letter
            </p>
            <p style={{color:hasCapitalLetter?"green":"red"}}>
              At least one capital letter
            </p>
            <p style={{color:hasNumber?"green":"red"}}>
              At least one number (0-9)
            </p>
            <p style={{color:hasSpecialchar?"green":"red"}}>
               At least one specialcharactor (!@#$%^&*)
            </p>
            
          </div>
        </div>

        <div>
          <label>Confirm password</label>
          <input
            type="password"
            {...register("confirmPassword", validationSchema.confirmPasswordValidator)}
          />
          <p style={{color: "red"}}>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  )
}
