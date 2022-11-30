import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/click to add to state/i);
  expect(buttonElement).toBeInTheDocument();
});
