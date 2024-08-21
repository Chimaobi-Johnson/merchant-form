"use client";

import { useEffect, useRef, useState } from "react";

export const Stepper = ({ steps, currentStep, children }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newStep.length) {
      //current step
      if (count == stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }
      //step complete
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index == 0 ? true : false,
          selected: index == 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <li
        key={index}
        className={`transition-all duration-500 py-2 my-8 font-light text-2xl ${
          step.selected ? " text-blue-600" : "text-black" } w-full flex items-center justify-around`}
      >
        {step.description}
        {index == newStep.length - 1 ? '' : <span>{'>'}</span>}
      </li>
    );
  });

  return (
    <div>
      <div className="px-6 border-b-[1px] border-gray-600">
        <ul className="list-none flex justify-around items-center">
          {displaySteps}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};
