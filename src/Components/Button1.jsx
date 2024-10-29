import React from "react";
import { ChevronDown, Plus } from "lucide-react";

function Button1() {
  return (
    <div className="flex justify-center md:justify-start ">
      <button className="flex items-center px-4 py-3 m-2 bg-[#4D44B5] text-white font-semibold rounded-full hover:bg-[#3b3a92] focus:outline-none focus:ring-2 focus:ring-[#4D44B5] transition duration-200">
        <Plus className="mr-2" size={22} />
        New User
        
      </button>
    </div>
  );
}

export default Button1;
