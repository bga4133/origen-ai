import React from "react";

export const ItemDetail = ({ setShowItemDetail, dataApi }) => {
  const { label, status, machine, created, modified } = dataApi;
  const closeModal = () => {
    setShowItemDetail(false);
  };
  return (
    <div>
      <button
        className="mt-5 mb-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={closeModal}
      >
        Close
      </button>
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Machine details
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Url: </span>
        {machine.info_url}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Label: </span>
        {machine.label}
      </p>
      <h3 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        Simulation details
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Label: </span>
        {label}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Status: </span>
        {status}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Created: </span>
        {created}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span>Modified: </span>
        {modified}
      </p>
    </div>
  );
};
