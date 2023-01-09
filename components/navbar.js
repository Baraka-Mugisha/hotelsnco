import Link from "next/link";
import { Icon } from "@iconify/react";
import SearchBar from "./searchbar";

export default function Navbar({ navbar }) {
  return (
    <div className="items-center justify-between flex px-10 py-5 border-b border-slate-200 ">
      <div className="flex flex-1 gap-x-2">
        <Icon icon="logos:airbnb-icon" height="30" width="30" />
        <span className="text-red-500 hidden lg:inline font-bold text-xl">
          hotels&co
        </span>
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <ul className="items-center flex-1 justify-end space-y-8 flex md:space-x-1 md:space-y-0">
        <li className="text-black">
          <Link
            href="/homes"
            className="font-semibold bg-white text-neutral-700 hover:rounded-full hover:bg-neutral-50 p-3"
          >
            Airbnb your home
          </Link>
        </li>
        <li className="text-black">
          <div className="hover:rounded-full hover:bg-neutral-50 p-3">
            <Icon
              icon="ph:globe-simple"
              className="cursor-pointer"
              height="20"
              width="20"
            />
          </div>
        </li>
        <li className="text-black">
          <div className="account-container flex gap-x-2 border border-slate-200 rounded-full items-center cursor-pointer p-1 pl-2 hover:shadow hover:transition-shadow">
            <Icon icon="ic:outline-menu" height="20" width="20" color="#666" />
            <Icon
              icon="ion:person-circle-sharp"
              height="35"
              width="35"
              color="#666"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
