import StepperItem from "./StepperItem";

export default function Stepper({
  currentStep,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const isActive = (index: number) => currentStep >= index;

  return (
    <ol className="flex items-center   w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <StepperItem step={1} isActive={isActive(0)} title="Account" />
      <StepperItem step={2} isActive={isActive(1)} title="Hotel" />
      <StepperItem step={3} isActive={isActive(2)} title="Confirmation" />
    </ol>
  );
}
