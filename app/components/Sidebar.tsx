import { Link, useLoaderData } from "@remix-run/react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

import { MdHotel } from "react-icons/md";

export default function Sidabar() {
  const { roles }: { roles: string } = useLoaderData();
  console.log(roles);
  return (
    <aside>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Flowbite logo">
          Flowbite
        </Sidebar.Logo>
        {roles === "owner" ? (
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to="/admin/">
                <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
              </Link>
              <Sidebar.Item href="/admin/room" icon={MdHotel}>
                Room
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item icon={HiArrowSmRight}>Logout</Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        ) : null}
        {roles === "superadmin" ? (
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/room" icon={MdHotel}>
                Room
              </Sidebar.Item>
              <Sidebar.Item href="/admin/booking" icon={HiInbox}>
                Booking
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        ) : null}
      </Sidebar>
    </aside>
  );
}
