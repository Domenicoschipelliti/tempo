import { render, screen } from "@testing-library/react";
import App from "../App";

describe("presenza titolo", () => {
  it("vedi la presenza del titolo", () => {
    render(<App />);
    const titolo = screen.getByText(/Città Più Cercate/i);
    expect(titolo).toBeInTheDocument();
  });
});
