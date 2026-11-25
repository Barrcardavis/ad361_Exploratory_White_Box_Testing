# ad361_Exploratory_White_Box_Testing
## Step 1: Exploratory Testing
Testing Charter
Investigate whether the counter application correctly updates and displays the count when using the Increment, Decrement, and Reset buttons individually and in combination.
<img width="772" height="267" alt="image" src="https://github.com/user-attachments/assets/2db7bf25-31e6-4f6b-a836-12bb3da8f319" />
## Step 2: Examine the Source Code
Starting value of count
The starting value of count is 0.
Statements that change count
setCount(count + 1)
setCount(count - 1)
setCount(0)
User action that causes each statement to execute
Clicking Increment executes setCount(count + 1).
Clicking Decrement executes setCount(count - 1).
Clicking Reset executes setCount(0).
Any branches or loops in the code
There are no branches.
There are no loops.
Does branch coverage apply?
No. There are no conditional statements such as if, else, or switch.
Does loop coverage apply?
No. There are no loops such as for, while, or do-while.

This is the complete answer to Step 2 based on the code shown in your VS Code screenshot.

## Step 3 Create the Test File
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

## Step 4: Test the Starting State

Created a test that verifies:
The application displays Count: 0
The Increment button is visible
The Decrement button is visible
The Reset button is visible

## Step 5: Test Statement Coverage

Created tests that execute each statement that changes the count:
<img width="745" height="146" alt="image" src="https://github.com/user-attachments/assets/ea56e87f-1839-4ada-815f-091c7f7f24e5" />

## Step 6: Test a Sequence of Actions

Created an additional test that performs multiple actions in sequence:
Actions tested:

Increment
Increment
Decrement
Reset

The displayed count was verified after each action.

## Step 7: Terminal Screenshot
<img width="1279" height="645" alt="image" src="https://github.com/user-attachments/assets/ff8ed17f-5b8f-4d71-b448-6ca73c5b8573" />
