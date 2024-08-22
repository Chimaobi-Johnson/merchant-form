"use client"

import { createContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form";


export const MerchantFormContext = createContext()

export function MerchantFormProvider ({ children }) {

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        watch,
        setValue,
        formState: { errors }
      } = useForm();
    



    const [currentOwner, setCurrentOwner ] = useState('owner1')

    const [ merchantForm, setMerchantForm ] = useState({
        ownersArray: [{
            firstName: watch(`${currentOwner}_firstName`),
            lastName: getValues(`${currentOwner}_lastName`),
            ownership: getValues(`${currentOwner}_ownership`),
            SSN: getValues(`${currentOwner}_SSN`),
            city: getValues(`${currentOwner}_city`),
            country: getValues(`${currentOwner}_country`),
            state: getValues(`${currentOwner}_state`),
            homeAddress: getValues(`${currentOwner}_homeAddress`),
            mobileNo: getValues(`${currentOwner}_mobileNo`),
            zipCode: getValues(`${currentOwner}_zipCode`),
            position: getValues(`${currentOwner}_position`),
            dob: getValues(`${currentOwner}_dob`)
        }],
        documents: []
    })


    const value = {
       merchantForm,
       setMerchantForm,
       register,
       handleSubmit,
       reset,
       watch,
       setValue,
       getValues,
       currentOwner,
       setCurrentOwner,
       errors 
    }

    return (
        <MerchantFormContext.Provider value={value}>
            {children}
        </MerchantFormContext.Provider>
    )
}
