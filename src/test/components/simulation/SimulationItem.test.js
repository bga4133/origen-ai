import { render, screen, waitFor } from "@testing-library/react";
import { SimulationItem } from "../../../components/simulation/SimulationItem";

describe("test in <Simulation Item />", () => {
  const mockedSimulation = {
    label: "BigOilCompany February sim.",
    status: "running",
    created: "2021-09-26T08:14:15Z",
    modified: "2021-09-26T08:22:15Z"
  };
  it("render the component", async () => {
    const { container } = render(
      <SimulationItem
        label={mockedSimulation.label}
        status={mockedSimulation.status}
        created={mockedSimulation.created}
        modified={mockedSimulation.modified}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
