## Description
A simple backend setup using node js and mongodb with validations and tests

## Setup
Follow the step below:

- Make sure the latest stable version of nodejs is installed. https://nodejs.org/en/download/

- After cloning the project, execute 'npm install -save' command to download the packages.

- There exists a prototype for .env file in the repo, change PORT, MONGODB_URL and MONGODB_NAME according to your own setup.

- To start the server, execute 'npm start' command. 

- To run the tests, execute 'npm run test' or 'npm run test:watch' in watch mode.

## Usage
To send the request:

- Method: POST

- URL: ec2-18-220-153-177.us-east-2.compute.amazonaws.com/g/records/fetch

- Body: Parameters stated in the assesment document(startDate, endDate, minCount, maxCount)
