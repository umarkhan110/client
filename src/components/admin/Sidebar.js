import React, { useState } from "react";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigat = [
  { name: "Providers", href: "/admin", isActive: true },
  // {
  //   name: "Orders",
  //   href: "/orders",
  //   isActive: false,
  // },
  { name: "Payment", href: "/admin",  isActive: false },
];

const Sidebar = () => {
  const [navigation, setNavigation] = useState(navigat);

  function handleNavigationClick(index) {
    // console.log(index);
    const updatedNavigation = navigation.map((item) => {
      if (item.name === index) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setNavigation(updatedNavigation);
  }
  // console.log(navigat[0].src)
  return (
    <div className="w-60 shadow-3xl ">
      <div className="flex justify-center items-center h-24">
        <h1 className="text-2xl font-normal text-[#252525] font-cursive">
          Calling All Kids
        </h1>
      </div>
      <div className="flex flex-col space-y-6">
        {navigation.map((item) => (
          
          <Link
            to={item.href}
            className={classNames(
              item.isActive
                ? " text-white bg-gradient-to-r from-[#8639FF] to-[#BE51FF] "
                : "text-[#757575]",
              "flex items-center h-12 space-x-2 px-6"
            )}
            onClick={() => handleNavigationClick(item.name)}
          >
            <div>
              <h1 className="font-sans text-sm font-normal mt-1">{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
