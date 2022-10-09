import React, { useState } from "react";
import { ItemDetail } from "./itemDetail/ItemDetail";

export const SimulationItem = ({ label, modified, status, created }) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemDetail, setShowItemDetail] = useState(false);
  const getTotalInformation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3004/newSimulationDetail3"
      );
      const data = await response.json();
      const [newData] = data;
      setDataApi(newData);
      setShowItemDetail(true);
      console.log(dataApi);
      setIsLoading(false);
    } catch (error) {
      setDataApi(null);
      setShowItemDetail(false);
      setIsLoading(false);
      throw new Error("Problema al cargar las info");
    }
  };

  return (
    <>
      <div className="mt-10 ml-1 md:ml-5 mt-6 lg:ml-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <svg
          className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clipRule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {label}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {label}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {status}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {modified}
        </p>
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={getTotalInformation}
        >
          Ver detalle
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {itemDetail && (
          <ItemDetail dataApi={dataApi} setShowItemDetail={setShowItemDetail} />
        )}
      </div>
      {isLoading && <p>Cargando</p>}
    </>
  );
};
