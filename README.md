
# rpc

## Description
In this site, you'll be able to randomly generate a password according to your criteria.
When you hit the "Generate Password" button, you will be prompted by some questions in order to generate the kind of password you would like.

The application can be reached at:

https://github.com/rakky21/rpc# rpc

https://rakky21.github.io/rpc/

## Snapshots
![Password](assets/example.jpg) 
![Password Generated](assets/example2.jpg) 


## Instructions 

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page