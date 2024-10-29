import React from "react";

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const start = (currentPage - 1) * usersPerPage + 1;
  const end = Math.min(currentPage * usersPerPage, totalUsers);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="text-sm text-gray-500 mb-2 text-center">
        Showing {start}-{end} from {totalUsers} data
      </div>

      {/* Pagination controls */}
      <div className="flex md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"}`}
          aria-label="Previous Page"
        >
          &#8249;
        </button>

        {/* Page Number Buttons */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentPage === index + 1 ? "bg-[#4D44B5] text-white shadow-md" : "border border-gray-300 text-gray-500 hover:bg-gray-200"}`}
              aria-label={`Page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700"}`}
          aria-label="Next Page"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
