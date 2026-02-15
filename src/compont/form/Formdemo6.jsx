import React from "react";
import { useForm } from "react-hook-form";

export const Formdemo6 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is Required*"
            }
        },
        contactValidator: {
            required: {
                value: true,
                message: "contact is required*"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "invalid contact."
            }
        },
        promoCodeValidator: {
            required: {
                value: true,
                message: "promocode is required*"
            },
            validate: (params) => {
                return params === "2026"
                    ? true
                    : "invalid promocode*"
            }
        },
        hobbiesValidator: {
            validate: (params) => {
                return params && params.length >= 2
                    ? true
                    : "min 2 hobbies are required*"
            }
        }
    };

    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Formdemo6</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>Name:</label>
                    <input {...register("name", validationSchema.nameValidator)} />
                    <p>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Contact:</label>
                    <input {...register("contact", validationSchema.contactValidator)} />
                    <p>{errors.contact?.message}</p>
                </div>

                <div>
                    <label>Promo Code:</label>
                    <input {...register("promoCode", validationSchema.promoCodeValidator)} />
                    <p>{errors.promoCode?.message}</p>
                </div>

                <div>
                    <label>Hobbies:</label>
                    <input type="checkbox" value="Cricket" {...register("hobbies", validationSchema.hobbiesValidator)} /> Cricket
                    <input type="checkbox" value="Music" {...register("hobbies", validationSchema.hobbiesValidator)} /> Music
                    <input type="checkbox" value="Reading" {...register("hobbies", validationSchema.hobbiesValidator)} /> Reading
                    <p>{errors.hobbies?.message}</p>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    );
};
