import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import Header from "@/components/Heading/Header";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";


export default function MerchantForm () {
    
    // const displayStep = (step) => {
    //     switch (step) {
    //       case 1:
    //         return 'Business info';
    //       case 2:
    //         return 'transactions';
    //       case 3:
    //         return 'Ownership';
    //       case 4:
    //         return 'docs';
    //       case 5:
    //         return 'bankin';
    //     case 6:
    //             return 'review';
    //       default:
    //         break;
    //     }
    //   };


    return (
        <div>
            <Header>Create Merchant</Header>
            <Modal>
            <Button variant="primary">Yes btn</Button>
            <Input type="text" inputName="first" value="" placeholder="First Name" label="First Name" />
            </Modal>
    
        </div>
    )
}


