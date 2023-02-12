By Ileta Simonov

https://github.com/iletaSimonov/beep-boop.git

@iletaSimonov
This web application takes numbers and returns with substituted strings.

Technologies used:
-HMTL
-CSS
-JavaScript

Description:
This web application takes a users inputted number and returns with the strings "Beep!", "Boop!", and "Wont you be my neighbor, [name] ?" It allows you to enter any number, and also enter your name for a more personilized result. 

Setup/ Installation requirements:
-Clone this repository to your desktop.
-Navigate to the top level of the directory.
-Open beep-boop/index.html in your browser.

Known Bugs:
No known bugs.

License:
MIT

Copyright (c) 2023 Ileta Simonov

Describe: beepBoop()
Test: "It should return an array of numbers from 0 to the users input number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return 'Wont you be my neighbor?' when a 3 is inputted."
Code: beepBoop(3)
Expected Output: [0, 1, 2, "Wont you be my neighbor?"]

Test: "It should return 'Boop!' when a 2 is inputted."
Code: beepBoop(2)
Expected Output: [0, 1, 'Boop!']

Test: "It should return 'Beep!' when 1 is inputted"
Code: beepBoop(1)
Expected Output: [0, 'Beep!']
