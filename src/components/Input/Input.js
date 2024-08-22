"use client";

import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext } from "react";
import { PatternFormat } from "react-number-format";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


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
  const merchantContext = useContext(MerchantFormContext);
  const { register, watch, setValue } = merchantContext;

  return (
    <div
      className={`flex transition-all duration-700 ${
        variant === "left"
          ? "flex-row-reverse justify-start items-center w-fit"
          : variant === "right"
          ? "flex-row justify-start items-center mr-12 basis-[45%] my-6"
          : "flex-col w-full"
      }`}
    >
      <label
        className={`${
          variant === "left"
            ? "w-fit font-bold"
            : variant === "right"
            ? "w-[30%]"
            : "mb-1"
        }`}
        htmlFor={placeholder}
      >
        {label}
        {required ? <span className="text-red-600">*</span> : ""}
      </label>

      {variant === "ssn" ? (
        <PatternFormat
          placeholder={placeholder}
          className="rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400"
          onChange={(e) => setValue(inputName, e.target.value)}
          valueIsNumericString
          format="###-##-###"
          mask="_"
        />
      ) : variant === 'mobile' ? (
        <PhoneInput
        inputClassName="rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400"
            defaultCountry="us"
            value={watch(inputName)}
            onChange={(phone) => setValue(inputName, phone)}
        />
      ) : (
        <input
          {...register(`${inputName}`, {
            required: required,
            minLength: minLength,
          })}
          className={`${
            variant === "left"
              ? "mr-2 flex-1"
              : variant === "right"
              ? "flex-1 ml-4"
              : ""
          } rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400`}
          id={placeholder?.replace(/ /g, "")}
          type={type}
          name={inputName}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
}
