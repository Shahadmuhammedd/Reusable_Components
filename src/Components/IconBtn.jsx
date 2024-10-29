import React from 'react';
import { Bell } from 'lucide-react';

function IconBtn() {
  return (
    <div className="flex items-center justify-center mt-2 ml-4">
      <div className="relative flex items-center">
        <Bell className="bg-white shadow-md rounded-full text-slate-400 p-2 hover:text-[#4D44B5] transition duration-200" size={40} />
      </div>
    </div>
  );
}

export default IconBtn;
