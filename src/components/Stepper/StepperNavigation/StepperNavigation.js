"use client";

import Button from "@/components/Button/Button";

export const StepperNavigation = ({ handleClick, currentStep, steps }) => (
  <div className="flex justify-center items-center">
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
