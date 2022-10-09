import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../../../pages/home/Home";

describe("home page test <Home />", () => {
  it("render the component", async () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  it("shouldn't show the div with the class container if data is not loaded", async () => {
    const { container } = render(<Home />);
    const containerDiv = container.querySelector("container");
    expect(containerDiv).toBeFalsy();
  });
  it("should show the data after load the page ", async () => {
    const { container } = render(<Home />);
    const containerDiv = container.querySelector("container");
    await waitFor(
      () => {
        expect(screen.getByTestId("imgId")).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
  });
});
