import { RegisterForm } from "~/types/register";

export default function Confirmation({
  goToPreviousStep,
  formData,
}: {
  formData: RegisterForm;
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
          Confirmation
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-gray-900">
          Please review your information before submitting:
        </p>
        <ul className="text-gray-900">
          <li>
            <strong>Username: </strong>
            {formData.username}
          </li>
          <li>
            <strong>Email:</strong> {formData.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {formData.phone}
          </li>
          <li>
            <strong>Password:</strong> ******
          </li>
          <li>
            <strong>Hotel Name:</strong> {formData.hotel_name}
          </li>
          <li>
            <strong>Hotel Description:</strong> {formData.hotel_description}
          </li>
        </ul>
        <p className="text-gray-900">
          If everything looks good, click &quot;Submit&quot; to complete the
          form.
        </p>
        <div className="space-y-4 md:space-y-3">
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Confirmation
          </button>
        </div>
      </div>
    </>
  );
}
