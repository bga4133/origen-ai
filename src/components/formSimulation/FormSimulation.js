import React, { useState } from "react";

export const FormSimulation = ({ setFiltered }) => {
  const [label, setLabel] = useState(null);
  const [status, setStatus] = useState(null);
  const [created, setCreated] = useState(null);
  const [modified, setModified] = useState(null);
  const [id, setId] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmmit = async e => {
    e.preventDefault();
    setId(id + 1);
    const simulation = { id: id, label, status, created, modified };
    setIsLoading(true);
    fetch("http://localhost:3004/simulations", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(simulation)
    })
      .then(() => {
        console.log("new simulation add");
        setIsLoading(false);
      })
      .catch(e => {
        setId(id + 1);
        console.log("Error", e);
      });
    updateFilterArray();
  };

  const updateFilterArray = async () => {
    try {
      const response = await fetch("http://localhost:3004/simulations");
      const data = await response.json();
      const sortData = data.sort((a, b) => (a.created > b.created ? 1 : -1));
      setFiltered(sortData);
    } catch {
      throw new Error("Oppps error");
    }
  };
  return (
    <>
      <form
        className="ml-1  w-50 md:ml-6 mt-10 lg:ml-6 mt-10   mt-10 w-full max-w-lg content-center"
        onSubmit={handleSubmmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Label
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Label"
              required
              value={label == null ? "" : label}
              onChange={e => setLabel(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Status
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="status"
              required
              value={status == null ? "" : status}
              onChange={e => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Created
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="date"
              placeholder="created"
              required
              value={created == null ? "" : created}
              onChange={e => setCreated(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Modified
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="date"
              placeholder="Modified"
              required
              value={modified == null ? "" : modified}
              onChange={e => setModified(e.target.value)}
            />
            {!isLoading && (
              <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Simulation
              </button>
            )}
            {isLoading && (
              <button
                disabled
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Adding simulation..
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
