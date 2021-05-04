# TODO APP React Frontend

A React frontend Web App for the fourth project of Udacity Cloud Developer Nanodegree.

It consumes an AWS serverless backend API.

All frontend code was provided as part of the course.

## Installation instructions

1. Requirements:

    - [Install Node.js](https://nodejs.org/en/) (tested with Node.Js 14);

2. In the project root folder, please run:

    - Download and install the required npm packages: `npm i`

3. Please update the config environment file:
    - Add your API Gateway backend API ID in variable `apiId`;
    - Add the AWS Region where the API Gateway backend API was deployed, in variable `region`;
    - For local backend execution, with Serverless offline, comment the line with variable `apiEndpoint`, and uncomment the line `http://localhost:4000/dev`;
    - Add your Auth0 APP token authentication and authorization settings:
        - Auth0 APP domain in variable `domain`;
        - Auth0 APP client ID in variable `clientId`;
        - Auth0 APP callback URL in variable `callbackUrl`.

# Start the Local Dev Server

In the project root folder, please run:

-   Run the local dev server: `npm start`
-   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Reference

The reference code and detailed installation instructions can be found in the link below:

-   [React Frontend Web App](https://github.com/udacity/cloud-developer/tree/master/course-04/project/c4-final-project-starter-code/client)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
