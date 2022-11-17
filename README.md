# Assignment_Lutsenko_JS
This repository includes 1 file with 3 tasks on JS and 1 README file with logical task


All tasks are solved in one file in the form of sequential scripts.
The result is output to the console using the console.log function.
The scripts are written in the Visual Studio Code editor and run with the runtime environment Node.js
To run all scripts execute this command in the terminal: node lutsenko.js

The bracket sequence task is described here lower.


This bracket sequence can be represented in the following form:
```
0 [
1  (
2   (
3    ()
4   )
5   ()
6   (
7    ()
8   )
9  ]
10]
```
In this form, you can see that the closing bracket on the 9th line does not match the opening parentheses on the 1st line
There are 4 ways to fix this sequence:
- change ( on the 1st line to [
- change ] on line 9 to )
- insert [ before line 1 and ) before line 9
- insert [ after line 1 and ) after line 9
