Describe: processNumber(userNumber)
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(processNumber(0).toEqual([0]);

Describe: processNumber(userNumber)
Test: "It should increment from 0 to the user number"
Expect(processNumber(userNumber) === [0,... userNumber]);

Describe: processNumber(userNumber)
Test: "It should replace a number containing 3 with 'Won't you be my neighbor?'"
Expect(processNumber(5) === [0, 1, 2, Won't you be my neighbor?, 4, 5]);

Describe: processNumber(userNumber)
Test: "It should replace a number containing 2 with 'Boop'"
Expect(processNumber(5) === [0, 1, Boop, Won't you be my neighbor?, 4, 5]);

# _Homework-3_

#### _This application takes a user number and outputs varying messages as it increments from 0 to the user number_

#### By _**William Sercombe**_

## Technologies Used

* _HTML_
* _CSS_
* _GIT_
* _Java Script_
* _Visual Studio Text Editor_

## Description

* _The user enters a number into the page form, the program will increment from 0 to the user's number and display a message in a comma separated list_
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

## Setup/Installation Requirements

* _Navigate to the gitub page to find the application_
* _Clone the application from the github address to their local computer_
* _Open the html application with a supported web browser (Chrome, FireFox, Edge, among those supported)_


## Known Bugs

* _N/A_

## License

_N/A_

## Contact Information

_William Sercombe | wsercombe@gmail.com | 503-545-9535_