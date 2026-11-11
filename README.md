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
