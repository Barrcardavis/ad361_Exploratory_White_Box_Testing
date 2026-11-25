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

## Step 8: Discussion
#### Coverage Table
<img width="771" height="183" alt="image" src="https://github.com/user-attachments/assets/fdbd9f00-0e80-4bcd-b6d5-aabc65cb58b3" />

##### Which parts of the component your tests executed

The tests executed every part of the component, including the initial rendering, the Increment button, the Decrement button, the Reset button, and a sequence of multiple button selections.

##### Whether any statements remained untested

No statements remained untested. All state-changing statements were executed by the test suite, resulting in 100% statement coverage.

##### Why the component may report few or no branches

The component does not contain any conditional logic such as if statements, switch statements, or ternary operators. Because there are no decision points, branch coverage is not a significant factor for this component.

##### Whether the percentage alone proves that the component works correctly

No. While 100% coverage shows that all lines and statements were executed during testing, coverage percentages do not guarantee that the application is free of defects. Additional testing is still needed to verify correct behavior in all situations.

## Step 9 Compare the Two Approaches
One test idea discovered through exploratory testing was selecting the buttons multiple times in different sequences to verify that the displayed count updated correctly after each action.
One test idea discovered by reading the source code was ensuring that each state-changing statement (setCount(count + 1), setCount(count - 1), and setCount(0)) was executed at least once.
Viewing the code made it easier to identify the exact statements that needed to be tested and helped ensure complete statement coverage.
A limitation of exploratory testing is that important code paths may be missed because the tester does not know the internal implementation. A limitation of white-box testing is that it focuses on the code structure and may overlook usability issues or unexpected user behavior.
