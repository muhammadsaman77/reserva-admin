import React, { useState } from "react";
import AccountInfo from "~/components/form/AccountInfo";
import Confirmation from "~/components/form/Confirmation";
import HotelInfo from "~/components/form/HotelInfo";
import Stepper from "~/components/Stepper";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 3;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    hotel_name: "",
    hotel_description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/register/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert(response.json());
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex">
      <div className="bg-primary-500 w-4/12"></div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Stepper currentStep={currentStep} totalSteps={NUMBER_OF_STEPS} />
          <form method="post" onSubmit={handleSubmit}>
            {currentStep === 0 && (
              <AccountInfo
                formData={formData}
                handleChange={handleChange}
                goToNextStep={goToNextStep}
              />
            )}
            {currentStep === 1 && (
              <HotelInfo
                formData={formData}
                handleChange={handleChange}
                goToNextStep={goToNextStep}
                goToPreviousStep={goToPreviousStep}
              />
            )}
            {currentStep === 2 && (
              <Confirmation
                formData={formData}
                goToPreviousStep={goToPreviousStep}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
