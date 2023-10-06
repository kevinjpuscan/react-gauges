import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SimpleGauge from "./SimpleGauge";

describe("SimpleGauge", () => {
  test("renders SimpleGauge component", () => {
    render(<SimpleGauge value={30} />);
    expect(screen.getByTestId("simple-gauge")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
  });
});
