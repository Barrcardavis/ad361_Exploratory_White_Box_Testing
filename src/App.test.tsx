import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Counter App", () => {
  test("displays the initial state", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /increment/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /decrement/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  test("increments count from 0 to 1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("decrements count from 0 to -1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  test("resets count back to 0", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reset/i }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("performs multiple actions in sequence", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /decrement/i }));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});