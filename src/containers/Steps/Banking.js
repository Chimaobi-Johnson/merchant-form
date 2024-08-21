import Input from "@/components/Input/Input"

const Banking = () => {

    return (
        <div>
            <h2 className="font-bold">Bank Information</h2>
            <div className="flex justify-between items-start mt-8">
                <div className="basis-[45%]">
                    <Input type={'number'} placeholder={'Routing Number'} variant="right" label={'Routing Number'} />
                    <Input type={'number'} placeholder={'Account Number'} variant="right" label={'Account Number'} />
                    <Input type={'text'} placeholder={'Account Name'} variant="right" label={'Name on Account'} />
                </div>
                <div className="flex-1">
                    <p className=" ml-8">Bank Name:</p>
                </div>
            </div>

        </div>
    )
}

export default Banking