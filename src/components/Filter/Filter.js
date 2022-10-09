import React, { useEffect } from "react";

export const Filter = ({
  setFiltered,
  activeButton,
  setActiveButton,
  dataApi
}) => {
  useEffect(() => {
    // TO do refactor this
    if (activeButton === 0) {
      setFiltered(dataApi);
      return;
    } else if (activeButton === 1) {
      const filtered = dataApi.filter(item => item.id === activeButton);
      setFiltered(filtered);
    } else if (activeButton === 2) {
      const filtered = dataApi.filter(item => item.id === activeButton);
      setFiltered(filtered);
    } else if (activeButton === 3) {
      const filtered = dataApi.filter(item => item.id === activeButton);
      setFiltered(filtered);
    } else if (activeButton === 4) {
      const filtered = dataApi.filter(item => item.id === activeButton);
      setFiltered(filtered);
    }
  }, [activeButton, dataApi, setFiltered]);
  return (
    <div className="mt-5">
      <button
        className="mr-4 ml-5
        center
        inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setActiveButton(0)}
      >
        All
      </button>
      <button
        className="mr-4  inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setActiveButton(1)}
      >
        Pending
      </button>
      <button
        className="mr-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setActiveButton(2)}
      >
        Running
      </button>
      <button
        className="mr-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setActiveButton(3)}
      >
        Finished
      </button>
    </div>
  );
};
