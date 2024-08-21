"use client"

import { createContext, useState } from "react"
import { useForm } from "react-hook-form";


export const MerchantFormContext = createContext()

export function MerchantFormProvider ({ children }) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
      } = useForm();

      console.log(errors)

    const [ merchantForm, setMerchantForm ] = useState({
        ownership: [],
    })


    const value = {
       merchantForm,
       setMerchantForm,
       register,
       handleSubmit,
       reset,
       watch,
       formState: { errors }
    }

    return (
        <MerchantFormContext.Provider value={value}>
            {children}
        </MerchantFormContext.Provider>
    )
}
