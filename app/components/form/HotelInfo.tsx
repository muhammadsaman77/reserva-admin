import { Label, Textarea, TextInput } from "flowbite-react";
import { RegisterForm } from "~/types/register";

export default function HotelInfo({
  goToNextStep,
  goToPreviousStep,
  formData,
  handleChange,
}: {
  formData: RegisterForm;
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <button onClick={goToPreviousStep}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          fill in your hotel info
        </h1>
      </div>
      <form className="space-y-4 md:space-y-3" action="#">
        <div>
          <Label htmlFor="hotel-name" value="Hotel Name" />

          <TextInput
            name="hotel_name"
            id="hotel-name"
            type="text"
            value={formData.hotel_name}
            onChange={handleChange}
            placeholder=" Platinum Hotel"
            required
          />
        </div>
        <div>
          <Label htmlFor="description" value="Hotel Description" />

          <Textarea
            rows={4}
            name="hotel_description"
            id="description"
            value={formData.hotel_description}
            onChange={handleChange}
            placeholder="description"
            required
          />
        </div>

        <button
          onClick={goToNextStep}
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Next : Hotel Info
        </button>
      </form>
    </>
  );
}
