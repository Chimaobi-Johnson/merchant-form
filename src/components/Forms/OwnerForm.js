"use client"

import Input from "../Input/Input";
import Select from "../Input/Select";




const OwnerForm = ({ ISR, i, currentOwner }) => {


    return (
    <div className=" border-y-[1px] border-gray-500 py-8 my-8">
        <h1 className=" uppercase relative">{ISR ? 'CONTROL PRONG (must reside in US)' : <span className="text-lg font-bold">{'Owner ' + i}</span>} <span className=" normal-case text-sm absolute top-3 font-medium left-[15%]">/ Control Prong</span></h1>

        <div className={`flex justify-between items-center mt-6 ${ISR ? '[&>div]:w-[31%]' : '[&>div]:w-[23%]'}`}>
            <Input inputName={`${currentOwner}_firstName`} type={'text'} label={'First Name:'} required minLength={3} placeholder={'First Name'} />
            <Input inputName={`${currentOwner}_lastName`} type={'text'} minLength={3} label={'Last Name:'} placeholder={'Last Name'} />
            <Input inputName={`${currentOwner}_position`} type={'text'} required label={'Title / Position:'} placeholder={'Title / Position'} />
            {ISR ? '' : <Input type={'text'} inputName={`${currentOwner}_ownership`} required label={'Ownership %:'} placeholder={'Ownership %'} />}
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={`${currentOwner}_mobileNo`} variant={'mobile'} type={'text'} label={'Home / Mobile Phone Number:'} required placeholder={'Home / Mobile Phone Number'} />
            <Input inputName={`${currentOwner}_homeAddress`} type={'text'} label={'Home Address:'} required minLength={3} placeholder={'Home Address'} />
            <Select inputName={`${currentOwner}_country`} label={'Country:'} required minLength={3} placeholder={'Country'}>
                <option value="U.S">U.S</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
                <option value="Portugal">Portugal</option>
            </Select>
            </div> 
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={`${currentOwner}_state`} type={'text'} label={'State:'} required minLength={3} placeholder={'State'} />
            <Input inputName={`${currentOwner}_city`} type={'text'} label={'City:'} required minLength={3} placeholder={'City'} />
            <Input inputName={`${currentOwner}_zipCode`} type={'text'} label={'Zip Code:'} required minLength={5} placeholder={'Zip Code'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input inputName={`${currentOwner}_SSN`}  variant={'ssn'} label={'Social Security Number (SSN):'} required placeholder={'Social Security Number (SSN)'} />
            <Input inputName={`${currentOwner}_dob`} type={'date'} label={'Date of Birth:'} placeholder={'Date of Birth'} required minLength={3} />
            <Input inputName={`${currentOwner}_email`} type={'email'} label={'Email Address:'} placeholder={'Email Address'} required minLength={3} />
        </div>
    </div>
)
}

export default OwnerForm