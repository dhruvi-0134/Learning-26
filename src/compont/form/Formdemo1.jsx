import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo1 = () => {

    const { register, handleSubmit } = useForm()

    const [userData, setuserData] = useState({})
    const [issubmited, setisSubmited] = useState(false)

    const submitHandler = (data) => {
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FORMDEMO1</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>NAME</label>
                    <input
                        type='text'
                        placeholder='Enter name'
                        {...register("firstname")}
                    />
                </div>

                <div>
                    <label>AGE</label>
                    <input
                        type='text'
                        placeholder='Enter age'
                        {...register("age")}
                    />
                </div>

                {/* ✅ New Email Field Added */}
                <div>
                    <label>EMAIL</label>
                    <input
                        type='email'
                        placeholder='Enter email'
                        {...register("email")}
                    />
                </div>

                <div>
                    <label>GENDER</label>
                    <br />
                    MALE:
                    <input
                        type='radio'
                        value="male"
                        {...register("gender")}
                    />
                    FEMALE:
                    <input
                        type='radio'
                        value="female"
                        {...register("gender")}
                    />
                </div>

                <div>
                    <label>Hobbies</label>
                    <br />
                    CRICKET:
                    <input
                        type='checkbox'
                        value="cricket"
                        {...register("hobbies")}
                    />
                    TRAVEL:
                    <input
                        type='checkbox'
                        value="travel"
                        {...register("hobbies")}
                    />
                    SCROLLING:
                    <input
                        type='checkbox'
                        value="scrolling"
                        {...register("hobbies")}
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
                    <h2>Name = {userData.firstname}</h2>
                    <h2>Age = {userData.age}</h2>
                    <h2>Email = {userData.email}</h2>
                    <h2>Gender = {userData.gender}</h2>
                    <h2>
                        Hobbies = {
                            userData.hobbies
                                ? userData.hobbies.join(", ")
                                : "None"
                        }
                    </h2>
                </div>
            }

        </div>
    )
}
