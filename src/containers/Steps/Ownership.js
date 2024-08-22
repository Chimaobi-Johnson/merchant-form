"use client";

import Button from "@/components/Button/Button";
import OwnerForm from "@/components/Forms/OwnerForm";
import Input from "@/components/Input/Input";
import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { useContext, useEffect, useState } from "react";

const Ownership = () => {
  const merchantContext = useContext(MerchantFormContext);
  const {
    getValues,
    setValue,
    currentOwner,
    setCurrentOwner,
    merchantForm,
    setMerchantForm,
  } = merchantContext;

  const [ISR, setISR] = useState(false);

  useEffect(() => {
    if (ISR) {
      setMerchantForm((prevState) => ({
        ...prevState,
        ownersArray: [
          {
            firstName: getValues(`${currentOwner}_firstName`),
            lastName: getValues(`${currentOwner}_lastName`),
            ownership: getValues(`${currentOwner}_ownership`),
            SSN: getValues(`${currentOwner}_SSN`),
            city: getValues(`${currentOwner}_city`),
            country: getValues(`${currentOwner}_country`),
            state: getValues(`${currentOwner}_state`),
            homeAddress: getValues(`${currentOwner}_homeAddress`),
            mobileNo: getValues(`${currentOwner}_mobileNo`),
            zipCode: getValues(`${currentOwner}_zipCode`),
            position: getValues(`${currentOwner}_position`),
            dob: getValues(`${currentOwner}_dob`),
          },
        ],
      }));
      setValue("country", "U.S");
    }
  }, [ISR]);

  const addNewOwner = () => {
    const owners = [...merchantForm?.ownersArray];
    if (owners.length === 4) {
      alert("Cannot add more than 4 owners");
      return;
    }
    const newOwner = {
      firstName: getValues(`${currentOwner}_firstName`),
      lastName: getValues(`${currentOwner}_lastName`),
      ownership: getValues(`${currentOwner}_ownership`),
      SSN: getValues(`${currentOwner}_SSN`),
      city: getValues(`${currentOwner}_city`),
      country: getValues(`${currentOwner}_country`),
      state: getValues(`${currentOwner}_state`),
      homeAddress: getValues(`${currentOwner}_homeAddress`),
      mobileNo: getValues(`${currentOwner}_mobileNo`),
      zipCode: getValues(`${currentOwner}_zipCode`),
      position: getValues(`${currentOwner}_position`),
      dob: getValues(`${currentOwner}_dob`),
    };
    setCurrentOwner(`owner${merchantForm?.ownersArray.length + 1}`);
    owners.push(newOwner);
    setMerchantForm((prevState) => ({
      ...prevState,
      ownersArray: owners,
    }));
  };

  return (
    <div>
      <div className="text-center" style={{ textAlign: "center" }}>
        <p>
          Provide the following information for each individual who owns,
          directly or indirectly, 25 % or more of the equity interest of your
          business. If no single owner owns more than 25%, an individual with
          significant responsibility can be added as principal 1*.
        </p>
        <p>
          *Individual with significant responsibility includes an executive
          officer or owner with authority to control, manage, and direct the
          legal entity {"("} e.g. a Chief Executive Officer, Chief Financial
          Officer, Managing Member, General Partner, President, Vice President,
          or Treasurer{")"} or any individual with authority to perform such
          functions.
        </p>
      </div>
      <div className="py-4">
        <Input
          type="checkbox"
          variant="left"
          onChange={(e) => setISR(e.target.checked)}
          label={"Is an individual with significant responsibility"}
          value={ISR}
        />
      </div>
      <div>
        {merchantForm?.ownersArray.length !== 0 && 
          merchantForm?.ownersArray.map((el, i) => (
            <OwnerForm
              register
              ISR={ISR}
              key={i}
              getValues={getValues}
              currentOwner={currentOwner}
              i={i + 1}
            />
          ))}
        {ISR ? (
          ""
        ) : (
          <Button variant={"secondary"} onClick={addNewOwner}>
            Add New Owner
          </Button>
        )}
      </div>
    </div>
  );
};

export default Ownership;
