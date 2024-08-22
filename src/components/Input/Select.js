"use client"

import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext } from "react";

export default function Select({
  type,
  value,
  placeholder,
  inputName,
  label,
  required,
  defaultValue,
  children,
  ...props
}) {

  const merchantContext = useContext(MerchantFormContext)
  const { register } = merchantContext

  return (
    <div className={"flex-row-reverse justify-start items-center w-fit"}>
      <label htmlFor={placeholder?.replace(/ /g, "")}>
        {label}
        {required ? <span className="text-red-600">*</span> : ""}
      </label>

      <select
        {...register(`${inputName}`, { required: true  })}
        id={placeholder?.replace(/ /g, "")}
        name={inputName}
        value={value}
        placeholder={placeholder}
        {...props}
        className={
          "rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400"
        }
      >
        {children}
      </select>
    </div>
  );
}
