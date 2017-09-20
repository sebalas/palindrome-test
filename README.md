# palindrome-test

This little project outputs all palindrome possibilities from a series of strings.

If you have Node already installed, just checkout the project and use this command line to run the program:
node src/main/palindrome.js Gimli Fili Ilif Ilmig Mark

If you prefer not to install node on your system and you already have Docker, simply use those Docker commands:
docker build -t palindrome-test .
docker run -ti palindrome-test test
docker run -ti palindrome-test start Gimli Fili Ilif Ilmig Mark