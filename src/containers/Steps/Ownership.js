import Button from "@/components/Button/Button"
import OwnerForm from "@/components/Forms/OwnerForm"
import Input from "@/components/Input/Input"

const Ownership = () => {

    return (
        <div>
            <div className="text-center">
                <p>Provide the following information for each individual who owns, directly or indirectly, 25 % or more of the equity interest of your business.
If no single owner owns more than 25%, an individual with significant responsibility can be added as principal 1*.</p>
                <p>*Individual with significant responsibility includes an executive officer or owner with authority to control, manage, and direct the legal
entity {'('} e.g. a Chief Executive Officer, Chief Financial Officer, Managing Member, General Partner, President, Vice President, or Treasurer{')'} or
any individual with authority to perform such functions.</p>
            </div>
            <div>
            <Input
              type="checkbox"
              label={"Is an individual with significant responsibility"}
              
            //   className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            </div>
            <div>
                <OwnerForm title={'Owner 1'} />
                <Button variant={'secondary'}>Add New Owner</Button>
            </div>
        </div>
    )
}

export default Ownership