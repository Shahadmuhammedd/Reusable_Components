import React, { useState, useEffect, useRef } from "react";
import {
  House,
  Users,
  HandCoins,
  Coins,
  User,
  MessagesSquare,
  Settings,
  BriefcaseBusiness,
  Rotate3d,
  Bell,
  Menu,
} from "lucide-react";
import { ImUserTie } from "react-icons/im";
import { HiOutlineHomeModern } from "react-icons/hi2";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Sidebar items data for mapping
  const navItems = [
    { name: "Dashboard", icon: <House /> },
    { name: "Users", icon: <Users /> },
    { name: "Service Providers", icon: <ImUserTie size={20} /> },
    { name: "Franchisee", icon: <HiOutlineHomeModern size={20} /> },
    { name: "Finance", icon: <HandCoins /> },
    { name: "Accounts", icon: <Coins /> },
    { name: "Profile", icon: <User /> },
    { name: "Chat", icon: <MessagesSquare /> },
    { name: "Settings", icon: <Settings /> },
    { name: "Service Management", icon: <BriefcaseBusiness /> },
    { name: "Ads Management", icon: <Rotate3d /> },
    { name: "Notifications", icon: <Bell /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#4D44B5] md:hidden"
        aria-label="Toggle Sidebar"
      >
        <Menu size={34} />
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-[#4D44B5] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="p-3 text-3xl font-heading font-bold ml-5">SC</div>

        {/* Navigation Items */}
        <ul className="space-y-5 p-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex font-heading items-center space-x-2 px-4 py-2 rounded-l-3xl cursor-pointer transition-colors duration-200 ${
                activeItem === item.name
                  ? "bg-white text-[#4D44B5] shadow-md w-[240px]"
                  : "hover:bg-[#4D44B5] hover:bg-opacity-75 w-[240px]"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="p-4 text-sm text-center">
          <p>Service Connect</p>
          <p>Let's Grow Together</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
