import { Link } from "@remix-run/react";
import { Label, TextInput } from "flowbite-react";
import { RegisterForm } from "~/types/register";

export default function AccountInfo({
  goToNextStep,

  formData,
  handleChange,
}: {
  formData: RegisterForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goToNextStep: () => void;
}) {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        fill in your credentials
      </h1>
      <div className="space-y-4 md:space-y-3">
        <div>
          <Label htmlFor="username" value="Your username" />

          <TextInput
            name="username"
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder=" Username"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" value="Your email" />

          <TextInput
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" value="Your Phone Number" />

          <TextInput
            name="phone"
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+628 12 3456 7890"
            required
          />
        </div>
        <div>
          <Label htmlFor="password" value="Your password" />

          <TextInput
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </div>

        <button
          onClick={goToNextStep}
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Next : Hotel Info
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </>
  );
}
