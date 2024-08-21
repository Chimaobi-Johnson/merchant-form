const { default: Input } = require("../Input/Input");


const OwnerForm = ({ }) => (
    <div className=" border-y-[1px] border-gray-500 py-8 my-8">
        <h1 className=" uppercase">OWNER 1</h1>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[23%]">
            <Input type={'text'} value={''} label={'First Name'} placeholder={'First Name'} />
            <Input type={'text'} value={''} label={'Last Name'} placeholder={'Last Name'} />
            <Input type={'text'} value={''} label={'Title / Position'} placeholder={'Title / Position'} />
            <Input type={'text'} value={''} label={'Ownership %'} placeholder={'Ownership %'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input type={'text'} value={''} label={'Home / Mobile Phone Number'} placeholder={'Home / Mobile Phone Number'} />
            <Input type={'text'} value={''} label={'Home Address'} placeholder={'Home Address'} />
            <Input type={'text'} value={''} label={'Country'} placeholder={'Country'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input type={'text'} value={''} label={'State'} placeholder={'State'} />
            <Input type={'text'} value={''} label={'City'} placeholder={'City'} />
            <Input type={'text'} value={''} label={'Zip Code'} placeholder={'Zip Code'} />
        </div>
        <div className="flex justify-between items-center mt-6 [&>div]:w-[31%]">
            <Input type={'text'} value={''} label={'Social Security Number (SSN)'} placeholder={'Social Security Number (SSN)'} />
            <Input type={'text'} value={''} label={'Date of Birth'} placeholder={'Date of Birth'} />
            <Input type={'text'} value={''} label={'Email Address'} placeholder={'Email Address'} />
        </div>
    </div>
)

export default OwnerForm