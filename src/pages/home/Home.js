import React, { useEffect, useState } from "react";
import { SimulationItem } from "../../components/simulation/SimulationItem";
import { MachinesItem } from "../../components/machines/MachinesItem";
import { Filter } from "../../components/Filter/Filter";
import { FormSimulation } from "../../components/formSimulation/FormSimulation";
import { HeaderApp } from "../../components/headerApp/HeaderApp";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  // states
  const [dataApi, setDataApi] = useState([]);
  const [machinesData, setMachinesData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const getSimulationList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3004/simulations");
      const machines = await fetch("http://localhost:3004/machines");
      const data = await response.json();
      const machinesResponse = await machines.json();
      const [machineResult] = machinesResponse;
      setMachinesData(machineResult.results);
      const sortData = data.sort((a, b) => (a.created > b.created ? 1 : -1));
      setDataApi(sortData);
      setFiltered(sortData);
      setIsLoading(false);
    } catch (error) {
      setDataApi(null);
      setIsLoading(false);
      throw new Error("Oppps error");
    }
  };

  useEffect(() => {
    getSimulationList();
  }, []);

  return (
    <div>
      <HeaderApp />
      <Filter
        dataApi={dataApi}
        setFiltered={setFiltered}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div
        className="grid grid-cols-1 gap-3  content-around md:grid-cols-2 lg:grid-cols-3 "
        data-testid="imgId"
      >
        {isLoading && <Loader className="ml-60" />}
        {filtered.map(({ id, label, modified, status, created }) => (
          <SimulationItem
            key={id}
            label={label}
            modified={modified}
            status={status}
            created={created}
          />
        ))}
        {machinesData.map(({ id, info_url, label }) => (
          <MachinesItem key={id} info_url={info_url} label={label} />
        ))}
      </div>
      {dataApi == null && (
        <div className="no__content">
          <h1 className="no__content__title">Oppsss Error</h1>
          <h2>Try Again</h2>
        </div>
      )}
      <FormSimulation setFiltered={setFiltered} />
    </div>
  );
};
