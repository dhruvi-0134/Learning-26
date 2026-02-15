import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo5 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const validationSchema = {

    idValidator: {
      required: { value: true, message: "ID is required*" },
      min: { value: 1, message: "Min id should be 1*" },
      max: { value: 100, message: "Max id should be 100*" }
    },

    nameValidator: {
      required: { value: true, message: "Name is required*" }
    },

    depValidator: {
      required: { value: true, message: "Department is required*" },
      minLength: { value: 2, message: "Min 2 characters required*" },
      maxLength: { value: 20, message: "Max 20 characters accepted*" }
    },

    salaryValidator: {
      required: { value: true, message: "Salary is required*" }
    },

    joindateValidator: {
      required: { value: true, message: "Join date is required*" }
    }
  }

  const submitHandler = (data) => {
    alert("Form submitted...")
    console.log(data)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Formdemo5</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>ID:</label>
          <input type='number' {...register("id", validationSchema.idValidator)} />
          {errors.id?.message}
        </div>

        <div>
          <label>NAME:</label>
          <input type='text' {...register("name", validationSchema.nameValidator)} />
          {errors.name?.message}
        </div>

        <div>
          <label>DEPARTMENT:</label>
          <input type='text' {...register("dep", validationSchema.depValidator)} />
          {errors.dep?.message}
        </div>

        <div>
          <label>Salary:</label>
          <input type='number' {...register("salary", validationSchema.salaryValidator)} />
          {errors.salary?.message}
        </div>

        <div>
          <label>Join Date:</label>
          <input type='date' {...register("join", validationSchema.joindateValidator)} />
          {errors.join?.message}
        </div>

        <div>
          <input type='submit' />
        </div>

      </form>
    </div>
  )
}
