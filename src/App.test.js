import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'hello world'", () => {
  render(<App />);

  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});