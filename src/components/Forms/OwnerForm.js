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
            <Input inputName={'firstName'} type={'text'} label={'First Name'} required minLength={3} placeholder={'First Name'} />
            <Input inputName={'lastName'} controlled={true} type={'text'} required minLength={3} label={'Last Name'} placeholder={'Last Name'} />
            <Input inputName={'position'} controlled={true} type={'text'} required label={'Title / Position'} placeholder={'Title / Position'} />
            {ISR ? '' : <Input type={'text'} inputName={'ownership'} required controlled={true} label={'Ownership %'} placeholder={'Ownership %'} />}
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'mobile_no'} controlled={true} type={'text'} label={'Home / Mobile Phone Number'} required placeholder={'Home / Mobile Phone Number'} />
            <Input inputName={'home_address'} controlled={true} type={'text'} label={'Home Address'} required minLength={3} placeholder={'Home Address'} />
            <Select inputName={'country'} controlled={true} defaultValue={'US'} label={'Country'} required minLength={3} placeholder={'Country'} />
            </div> 
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'state'} controlled={true} type={'text'} label={'State'} required minLength={3} placeholder={'State'} />
            <Input inputName={'city'} controlled={true} type={'text'} label={'City'} required minLength={3} placeholder={'City'} />
            <Input inputName={'zipCode'} controlled={true} type={'text'} label={'Zip Code'} required minLength={5} placeholder={'Zip Code'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={'SSN'} controlled={true} type={'number'} label={'Social Security Number (SSN)'} required minLength={8} placeholder={'Social Security Number (SSN)'} />
            <Input inputName={'dob'} controlled={true} type={'date'} label={'Date of Birth'} placeholder={'Date of Birth'} required minLength={3} />
            <Input inputName={'email'} controlled={true} type={'email'} label={'Email Address'} placeholder={'Email Address'} required minLength={3} />
        </div>
    </div>
)
}

export default OwnerForm