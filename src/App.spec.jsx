import { render, screen } from "@testing-library/react";
import App from "./App";

it("tests app render", () => {
    render(<App />);
    expect(screen.getByText("Cow Counter")).toBeInTheDocument();
});
