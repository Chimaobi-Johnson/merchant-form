import { MerchantFormContext } from "@/contexts/MerchantFormContext"
import { useContext } from "react"

const Review = () => {

    const merchantContext = useContext(MerchantFormContext)

    const { merchantForm } = merchantContext;

    return (
        <div>
            <h1 className="font-bold">Review</h1>
            <div className="flex justify-between items-start">
                <div>
                <h2>Ownership</h2>

                        {merchantForm?.ownersArray.length !== 0 && merchantForm?.ownersArray.map((el, i) => {
                            return (
                            <ul className="mt-12" key={i} >
                                <h4 className="font-bold text-primary">{`Owner ${i + 1}`}</h4>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">First Name: </span>{el.firstName}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">Last Name: </span>{el.lastName}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">City: </span>{el.city}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">Ownership: </span>{el.ownership}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">SSN: </span>{el.SSN}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">Position: </span>{el.position}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">State: </span>{el.state}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">Country: </span>{el.country}</li>
                               <li className="p-6 flex justify-start items-center"><span className=" font-bold mr-2">Zip Code: </span>{el.zipCode}</li>
                            </ul>)
                        })}
                </div>
                <div>
                <h2>Documents</h2>

                    <ul>
                        {merchantForm?.documents.length !== 0 && merchantForm?.documents.map((el, i) => {
                            console.log(el[0].name)
                            return <li key={i} className="p-6">{el[0].name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review