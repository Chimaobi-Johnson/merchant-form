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
        setValue,
        formState: { errors }
      } = useForm();

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
       setValue,
       errors 
    }

    return (
        <MerchantFormContext.Provider value={value}>
            {children}
        </MerchantFormContext.Provider>
    )
}
