import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Lodestar React'", () => {
  render(<App />);

  const textElement = screen.getByText(/Lodestar React/i);
  expect(textElement).toBeInTheDocument();
});

// FIXME:
// write more tests
