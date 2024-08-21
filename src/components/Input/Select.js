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
  ...props
}) {

  const merchantContext = useContext(MerchantFormContext)
  const { register } = merchantContext

  return (
    <div className={"flex-row-reverse justify-start items-center w-fit"}>
      <label for={label?.replace(/ /g, "")}>
        {label ? `${label}:` : ""}
        {required ? <span className="text-red-600">*</span> : ""}
      </label>

      <select
        {...register(`${inputName}`, { required: true  })}
        defaultValue={defaultValue}
        id={label?.replace(/ /g, "")}
        name={inputName}
        value={value}
        placeholder={placeholder}
        {...props}
        className={
          "rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400"
        }
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
