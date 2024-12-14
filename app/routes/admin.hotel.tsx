import { redirect, useLoaderData } from "@remix-run/react";
import { Carousel } from "flowbite-react/components/Carousel";
import { checkAuth } from "~/services/auth";
import { getHotel } from "~/services/hotel";
import type { Facilities, Hotel } from "~/types/hotel";

export const loader = async () => {
  const auth = await checkAuth();
  if (!auth) {
    return redirect("/login");
  }
  const hotel = await getHotel(auth.uid);

  return {
    hotel: hotel?.hotel,
  };
};
export default function Hotel() {
  const { hotel, facilities }: { hotel: Hotel; facilities: Facilities[] } =
    useLoaderData();
  console.log(hotel);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
          Hotel Data
        </h2>
        <div className="flex  gap-5">
          <div className="w-1/2">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
              <Carousel>
                {hotel.images.map((image, index) => (
                  <img key={index} src={image} alt="hotel" />
                ))}
              </Carousel>
            </div>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Description
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {hotel.description}
              </dd>
            </dl>
          </div>
          <div className="w-1/2">
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Name
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <span>{hotel.name}</span>
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Price
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <span>Rp {hotel.price} per night</span>
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Facilitites
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {facilities.map((facility) => facility.name).join(", ")}
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Address
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {hotel.address}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
