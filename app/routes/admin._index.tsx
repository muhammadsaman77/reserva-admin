// import { useLoaderData } from "@remix-run/react";
// import { useState } from "react";
import Edit from "~/assets/svg/Edit";
// import { Hotel } from "~/types/hotel";

export default function AdminHome() {
  // const data: Hotel = useLoaderData();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const onClickEditHotel = () => setIsModalOpen(true);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
      <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
        <nav className="mb-4 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <a
                  href="/"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  My account
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                  Account
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
          General overview
        </h2>
        <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Orders made
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              24
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  />
                </svg>
                10.3%
              </span>
            </span>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth={2}
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Reviews added
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              16
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  />
                </svg>
                8.6%
              </span>
            </span>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Favorite products added
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              8
              <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  />
                </svg>
                12%
              </span>
            </span>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Product returns
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              2
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  />
                </svg>
                50%
              </span>
            </span>
          </div>
        </div>
        <div className="py-4 md:py-8">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img
                  className="h-16 w-16 rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  alt="Helene avatar"
                />
                <div>
                  <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                    s
                  </h2>
                </div>
              </div>
              <dl className="">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Description
                </dt>
                <dd className="text-gray-500 dark:text-gray-400"></dd>
              </dl>
            </div>
            <div className="space-y-4">
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Price per night
                </dt>
                <dd className="text-gray-500 dark:text-gray-400"></dd>
              </dl>
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Facilities
                </dt>
                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400"></dd>
              </dl>
            </div>
          </div>
          <button
            type="button"
            // onClick={onClickEditHotel}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            <Edit />
            Edit your data
          </button>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Latest orders
          </h3>
          <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5">
            <dl className="w-1/2 sm:w-48">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Order ID:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  #FWB12546798
                </a>
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Date:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                11.12.2023
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Price:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                $499
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Status:
              </dt>
              <dd className="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                <svg
                  className="me-1 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                In transit
              </dd>
            </dl>
            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
              <button
                id="actionsMenuDropdownModal10"
                data-dropdown-toggle="dropdownOrderModal10"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
              >
                Actions
                <svg
                  className="-me-0.5 ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownOrderModal10"
                className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="actionsMenuDropdown10"
                >
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                        />
                      </svg>
                      <span>Order again</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Order details
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      data-modal-target="deleteOrderModal"
                      data-modal-toggle="deleteOrderModal"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                        />
                      </svg>
                      Cancel order
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4 dark:border-gray-700 md:py-5">
            <dl className="w-1/2 sm:w-48">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Order ID:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  #FWB12546777
                </a>
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Date:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                10.11.2024
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Price:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                $3,287
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Status:
              </dt>
              <dd className="mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <svg
                  className="me-1 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                Cancelled
              </dd>
            </dl>
            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
              <button
                id="actionsMenuDropdownModal11"
                data-dropdown-toggle="dropdownOrderModal11"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
              >
                Actions
                <svg
                  className="-me-0.5 ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownOrderModal11"
                className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="actionsMenuDropdown11"
                >
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                        />
                      </svg>
                      <span>Order again</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Order details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 py-4 pb-4 dark:border-gray-700 md:py-5">
            <dl className="w-1/2 sm:w-48">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Order ID:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  #FWB12546846
                </a>
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Date:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                07.11.2024
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Price:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                $111
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Status:
              </dt>
              <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="me-1 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Completed
              </dd>
            </dl>
            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
              <button
                id="actionsMenuDropdownModal12"
                data-dropdown-toggle="dropdownOrderModal12"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
              >
                Actions
                <svg
                  className="-me-0.5 ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownOrderModal12"
                className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="actionsMenuDropdown12"
                >
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                        />
                      </svg>
                      <span>Order again</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Order details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-y-4 pt-4 md:pt-5">
            <dl className="w-1/2 sm:w-48">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Order ID:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                <a href="/" className="hover:underline">
                  #FWB12546212
                </a>
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Date:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                18.10.2024
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Price:
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                $756
              </dd>
            </dl>
            <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
              <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                Status:
              </dt>
              <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="me-1 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                Completed
              </dd>
            </dl>
            <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
              <button
                id="actionsMenuDropdownModal13"
                data-dropdown-toggle="dropdownOrderModal13"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
              >
                Actions
                <svg
                  className="-me-0.5 ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownOrderModal13"
                className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                  aria-labelledby="actionsMenuDropdown13"
                >
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                        />
                      </svg>
                      <span>Order again</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth={2}
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Order details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Account Information Modal */}

      <div
        id="deleteOrderModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-md p-4 md:h-auto">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="deleteOrderModal"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <svg
                className="h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
              <span className="sr-only">Danger icon</span>
            </div>
            <p className="mb-3.5 text-gray-900 dark:text-white">
              <a
                href="/"
                className="font-medium text-primary-700 hover:underline dark:text-primary-500"
              >
                @heleneeng
              </a>
              , are you sure you want to delete this order from your account?
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              This action cannot be undone.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button
                data-modal-toggle="deleteOrderModal"
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
