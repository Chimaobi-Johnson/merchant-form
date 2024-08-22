import Input from "@/components/Input/Input"

const Banking = () => {

    return (
        <div>
            <h2 className="font-bold">Bank Information</h2>
            <div className="flex justify-between items-start mt-8">
                <div className="w-full">
                    <div className="flex justify-start items-center">
                        <Input type={'number'} placeholder={'Routing Number'} variant="right" label={'Routing Number'} />
                        <div className="flex-1 pl-8">
                          <p>Bank Name:</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                    <Input type={'number'} placeholder={'Account Number'} variant="right" label={'Account Number'} />
                        <div className="flex-1 pl-8">
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                    <Input type={'text'} placeholder={'Account Name'} variant="right" label={'Name on Account'} />
                        <div className="flex-1 pl-8">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banking