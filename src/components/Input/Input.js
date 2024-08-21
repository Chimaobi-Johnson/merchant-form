"use client"

import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext } from "react";

export default function Input({
  type,
  value,
  placeholder,
  inputName,
  label,
  required,
  minLength,
  variant,
  ...props
}) {

  const merchantContext = useContext(MerchantFormContext)
  const { register } = merchantContext
      
  return (
    <div className={`flex transition-all duration-700 ${variant === 'left' ? 'flex-row-reverse justify-start items-center w-fit' : variant === 'right' ? 'flex-row justify-start items-center my-14' : 'flex-col w-full'}`}>
      <label className={`${variant === 'left' ? 'flex-1 font-bold' : variant === 'right' ? 'w-[30%]': ''}`} for={label?.replace(/ /g,'')}>{label ? `${label}:`: ''}{required ? <span className="text-red-600">*</span> : ''}</label>
      <input
      {...register(`${inputName}`, { required: required, minLength: minLength })}
        className={`${variant === 'left' ? 'mr-2' : variant === 'right' ? 'flex-1' : ''} rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400`}
        id={label?.replace(/ /g,'')}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
