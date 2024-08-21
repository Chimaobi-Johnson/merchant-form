"use client"

import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function Input({
  type,
  value,
  placeholder,
  inputName,
  label,
  required,
  minLength,
  ...props
}) {

  const merchantContext = useContext(MerchantFormContext)
  const { register } = merchantContext
      
  return (
    <div className={`flex transition-all duration-700 ${type === 'checkbox' ? 'flex-row-reverse justify-start items-center w-fit' : 'flex-col w-full'}`}>
      <label className={`${type === 'checkbox' ? 'flex-1 font-bold' : ''}`} for={label?.replace(/ /g,'')}>{label ? `${label}:`: ''}{required ? <span className="text-red-600">*</span> : ''}</label>
      <input
      {...register(`${inputName}`, { required: required, minLength: minLength })}
        className={`${type === 'checkbox' ? 'mr-2' : 'rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400'} `}
        id={label?.replace(/ /g,'')}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
