import Button from "@/components/Button/Button";


export const StepperNavigation = ({
  handleClick,
  currentStep,
  steps
}) => (
  <div className="flex justify-center items-center">
    <Button
      customClass={`${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => {}}
      type="primary">
      Previous
    </Button>
    <div className="ml-4">
      <Button bgColor={''} onClick={() => handleClick('next')} type="solid" color="#ffffff" size="lg">
        {currentStep === steps.length ? 'Finish' : 'Next'}
      </Button>
    </div>
  </div>
);
