import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import vm from "./vm";

it("simple render test of app", () => {
    render(<App />);
    expect(screen.getByText("Cow Counter")).toBeInTheDocument();
});

it("tests add cows", () => {
    vm.countCow = jest.fn();
    render(<App />);
    userEvent.click(screen.getByText("Count Cow"));
    expect(vm.countCow).toBeCalled();
    expect(screen.getByText("🐮")).toBeInTheDocument();
});
