import UploadCard from "@/components/UploadCard/UploadCard"

const Documents = () => {

    return (
        <div>
            <UploadCard title={'Photo Identification'} id={'photoIdentification'} />
            <UploadCard title={'Bank Letter or Voided Check'} id={'bankLetter'} />
            <UploadCard title={'3 Months of Bank Statements'} id={'bankStatement'} />
        </div>
    )
}

export default Documents