import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo2 = () => {

  const { register, handleSubmit } = useForm()
  const [productData, setproductData] = useState({})
  const [issubmited, setissubmited] = useState(false)

  const submitHandler = (data) => {
    console.log(data)
    setproductData(data)
    setissubmited(true)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>PRODUCT FORM</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>Product Name</label>
          <input
            type='text'
            placeholder='Enter Product name'
            {...register("productName")}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type='number'
            placeholder='Enter price'
            {...register("price")}
          />
        </div>

        <div>
          <label>Category</label>
          <select {...register("category")}>
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="grocery">Grocery</option>
          </select>
        </div>

        <div>
          <label>Launch Date</label>
          <input
            type='date'
            {...register("launchDate")}
          />
        </div>

        <div>
          <label>In Stock</label>
          <input
            type='checkbox'
            {...register("inStock")}
          />
        </div>

        <div>
          <input type='submit' />
        </div>

      </form>

      {
        issubmited &&
        <div>
          <h1>OUTPUT</h1>
          <h2>Product Name = {productData.productName}</h2>
          <h2>Price = {productData.price}</h2>
          <h2>Category = {productData.category}</h2>
          <h2>Launch Date = {productData.launchDate}</h2>
          <h2>In Stock = {productData.inStock ? "Yes" : "No"}</h2>
        </div>
      }

    </div>
  )
}
