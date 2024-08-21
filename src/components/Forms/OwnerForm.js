"use client"

import { useState } from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
import NumberFormat from 'react-number-format';
import PhoneInput from 'react-phone-number-input'
import { useForm } from "react-hook-form";


const OwnerForm = ({ ISR, title }) => {

    return (
    <div className=" border-y-[1px] border-gray-500 py-8 my-8">
        <h1 className=" uppercase">{title}</h1>
        <div className={`flex justify-between items-center mt-6 ${ISR ? '[&>div]:w-[31%]' : '[&>div]:w-[23%]'}`}>
            <Input inputName={'firstName'} type={'text'} label={'First Name'} required placeholder={'First Name'} />
            <Input inputName={'lastName'} controlled={true} type={'text'} label={'Last Name'} placeholder={'Last Name'} />
            <Input inputName={'position'} controlled={true} type={'text'} label={'Title / Position'} placeholder={'Title / Position'} />
            {ISR ? '' : <Input type={'text'} inputName={'ownership'} controlled={true} label={'Ownership %'} placeholder={'Ownership %'} />}
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'mobile_no'} controlled={true} type={'text'} label={'Home / Mobile Phone Number'} placeholder={'Home / Mobile Phone Number'} />
            <Input inputName={'home_address'} controlled={true} type={'text'} label={'Home Address'} placeholder={'Home Address'} />
            <Select inputName={'country'} controlled={true} defaultValue={'US'} label={'Country'} placeholder={'Country'} />
            </div> 
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'state'} controlled={true} type={'text'} label={'State'} placeholder={'State'} />
            <Input inputName={'city'} controlled={true} type={'text'} label={'City'} placeholder={'City'} />
            <Input inputName={'zipCode'} controlled={true} type={'text'} label={'Zip Code'} placeholder={'Zip Code'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'SSN'} controlled={true} type={'number'} label={'Social Security Number (SSN)'} placeholder={'Social Security Number (SSN)'} />
            <Input inputName={'dob'} controlled={true} type={'date'} label={'Date of Birth'} placeholder={'Date of Birth'} />
            <Input inputName={'email'} controlled={true} type={'email'} label={'Email Address'} placeholder={'Email Address'} />
        </div>
    </div>
)
}

export default OwnerForm