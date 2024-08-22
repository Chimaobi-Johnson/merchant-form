import Input from "@/components/Input/Input"
import Select from "@/components/Input/Select"
import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext, useState } from "react";

const BUSINESS_CATEGORIES = [
    'E-commerce Solutions',
    'Legal Technology (LegalTech)',
    'Smart Home and IoT (Internet of Things)',
    'Entertainment and Media',
    'Real Estate Technology (PropTech)',
    'Healthcare Technology',
    'Financial Technology (Fintech)',
    'Education Technology (Edtech)',
    'Artificial Intelligence and Machine Learning',
    'Cybersecurity',
    'Customer Relationship Management (CRM)',
    'Human Resources Technology (HRTech)',
    'Travel and Hospitality',
    'Supply Chain and Logistics'
]

const Transactions = () => {
    const merchantContext = useContext(MerchantFormContext)
    const { setValue } = merchantContext
    const [businessCategories, setBusinessCategories] = useState(null)
    const [businessCategory, setBusinessCategory] = useState(null)

    const fetchCategories = (value) => {
        const result = BUSINESS_CATEGORIES.filter(
            (category) =>
              value && category && category.toLowerCase().includes(value)
          ); // filter products only when user types on input
          setBusinessCategories(result);
          
    }


    const changeCategoryHandler = e => {
        setBusinessCategory(e.target.value);
        fetchCategories(e.target.value);
    }

    const selectCategory = (category) => {
        setBusinessCategory(category)
        setValue('businessCategory', category)
        setBusinessCategories(null)
    }

    return (
        <div>
            <div className="w-[50%]">
                <Input type={'text'} placeholder={'Start by typing'} onChange={changeCategoryHandler} inputName={'businessCategory'} variant={'right'} label={<p className="font-bold">Business Category: <br /> <span className="font-light">{'('}service or products sold{')'}</span></p>} />
                <div className="mr-0">
                   <ul>
                    {businessCategories?.length !== 0 && businessCategories?.map((el, i) => (
                        <li key={i} onClick={() => selectCategory(el)} className="px-4 cursor-pointer my-10 border-b-[1px] w-fit border-gray-400">{el}</li>
                    ))}
                    </ul>
                </div>
                <Input type={'text'} variant={'right'} label={<p className="font-bold">Description of what you sell</p>} />
            </div>

            <div className="mt-8">
                <h2 className="font-medium">How Do You Accept Card? <span className="font-light">{'('}Must equal 100%{')'}</span></h2>
                <div className="[&>div]:w-[35%] flex justify-between items-center mt-6">
                    <Input type={'number'} label={'Swipe (Card Present)'} />
                    <Input type={'number'} label={'Keyed (Manual Entry)'} />
                    <Input type={'number'} label={'Ecommerce (Card Not Present)'} />
                </div>
            </div>

            <div className="mt-8">
                <h2 className="font-medium">Visa / Mastercard / Discover</h2>
                <div className="flex justify-between items-center mt-6 [&>div]:w-[50%] flex-wrap">
                    <Input type={'number'} label={'Swipe (Card Present)'} />
                    <Input type={'number'} label={'Keyed (Manual Entry)'} />
                    <Input type={'number'} label={'Ecommerce (Card Not Present)'} />
                </div>
            </div>

            <div className="mt-8">
                <h2 className="font-medium">American Express {'('}AMEX{')'}</h2>
                <div className="flex justify-between items-center mt-6 [&>div]:w-[50%] flex-wrap">
                    <Input type={'number'} label={'Average Transaction Amount'} />
                    <Input type={'number'} label={'Highest Transaction Amount'} />
                    <Input type={'number'} label={'Gross Monthly Sales Volume'} />
                </div>
            </div>
        </div>
    )
}

export default Transactions