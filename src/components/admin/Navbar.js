import React, { Fragment } from "react";
import {Menu, Transition } from "@headlessui/react";
import Profile from "../assets/images/Profile.svg";
import Arrow from "../assets/images/DropDown.png";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  return (
    <>
      <div className="bg-[#EEEEEE]">
        <div className="mx-auto">
          <div className="relative flex h-12 justify-end">
            <div className="absolute inset-y-0 space-x-2 right-0 flex items-center pr-[60px]">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full text-sm focus:outline-none border-[#BE51FF] border-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-6 w-6 rounded-full"
                      src={Profile}
                      alt=""
                    />
                  </Menu.Button>
                </div>
              </Menu>
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full text-sm focus:outline-none ">
                    <span className="sr-only">Open user menu</span>
                    <button
                type="button"
                className="rounded-full  p-1 text-gray-400  focus:outline-none "
              >
                <span className="sr-only">View notifications</span>
                <img src={Arrow} alt="dropdown"/>
              </button>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/login"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
