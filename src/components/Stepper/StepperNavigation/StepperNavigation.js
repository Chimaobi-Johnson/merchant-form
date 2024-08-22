"use client";

import Button from "@/components/Button/Button";

export const StepperNavigation = ({ handleClick, currentStep, steps }) => (
  <div className="flex justify-between mx-8 items-center mt-8 border-t-[1px] border-gray-400 py-4">
    <Button
      onClick={() => handleClick()}
      variant="basic"
    >
      Previous
    </Button>
    <div className="ml-4">
      <Button
        variant="primary"
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length ? "Finish" : "Next"}
      </Button>
    </div>
  </div>
);
