"use client";

import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import Header from "@/components/Heading/Header";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import { Stepper } from "@/components/Stepper/Stepper";
import { StepperContext } from "@/contexts/StepperContext";
import { StepperNavigation } from "@/components/Stepper/StepperNavigation/StepperNavigation";
import Transactions from "../Steps/Transactions";
import Ownership from "../Steps/Ownership";
import Documents from "../Steps/Documents";
import Banking from "../Steps/Banking";
import Review from "../Steps/Review";
import { useForm } from "react-hook-form";
import { MerchantFormContext } from "@/contexts/MerchantFormContext";
import { extractAndSortOwners, isEmpty } from "@/utils/helperFunctions";

export default function MerchantForm() {
  const merchantFormContext = useContext(MerchantFormContext);
  const { handleSubmit, errors, merchantForm, setMerchantForm } =
    merchantFormContext;
  const [currentStep, setCurrentStep] = useState(1);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return "Business info";
      case 2:
        return <Transactions />;
      case 3:
        return <Ownership />;
      case 4:
        return <Documents />;
      case 5:
        return <Banking />;
      case 6:
        return <Review />;
      default:
        break;
    }
  };

  const steps = [
    "BUSINESS INFO",
    "TRANSACTIONS",
    "OWNERSHIP",
    "DOCUMENTS",
    "BANKING",
    "REVIEW",
  ];

  const moveToNextStep = async (data, direction) => {
    let newStep = currentStep;
    let currentStepName = steps[currentStep - 1];

    if (direction !== "next") {
      newStep--;
    } else {
      switch (currentStepName) {
        case "BUSINESS INFO":
          newStep++;
          break;
        case "TRANSACTIONS":
          newStep++;
          break;

        case "OWNERSHIP":
          if (data) {
            newStep++;
          }
          break;

        case "DOCUMENTS":
          if (
            !data.bankLetter ||
            !data.photoIdentification ||
            !data.bankStatement
          ) {
            alert("You must upload files before you proceed");
            return;
          }
          setMerchantForm((prevState) => ({
            ...prevState,
            documents: [
              { bankLetter: data.bankLetter },
              { bankStatement: data.bankStatement },
              { photoIdentification: data.photoIdentification },
            ],
          }));
          newStep++;

          break;

        case "BANKING":
          newStep++;

          break;

        case "REVIEW":
          alert("Form submitted successfully");

          break;

        default:
          break;
      }
    }
    newStep > 0 &&
      (newStep < steps.length || newStep === steps.length) &&
      setCurrentStep(newStep);
  };

  return (
    <div>
      <Header>Create Merchant</Header>
      <Modal>
        <Stepper steps={steps} currentStep={currentStep}>
          <div className="px-8 mb-6 w-full">
            <StepperContext.Provider>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          <div className="mt-auto w-full absolute bottom-0">
            <StepperNavigation
              handleClick={handleSubmit(moveToNextStep)}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </Stepper>
      </Modal>
    </div>
  );
}
