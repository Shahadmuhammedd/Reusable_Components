import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function ToggleButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Newest");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-center md:justify-start relative " ref={dropdownRef}>
            <div className="relative inline-block text-left">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center px-6 py-3 bg-white text-[#4D44B5] rounded-full focus:outline-none ring-2 ring-[#4D44B5] transition duration-200"
                >
                    {selectedOption}
                    <ChevronDown className="ml-2" size={18} />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                        <div className="py-1">
                            <button
                                onClick={() => handleOptionClick("Newest")}
                                className="block px-4 py-2 text-[#4D44B5] w-full text-left hover:bg-gray-100"
                            >
                                Newest
                            </button>
                            <button
                                onClick={() => handleOptionClick("Oldest")}
                                className="block px-4 py-2 text-[#4D44B5] w-full text-left hover:bg-gray-100"
                            >
                                Oldest
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ToggleButton;
