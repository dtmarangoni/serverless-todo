// API Gateway backend API ID
const apiId = 'le8djvzu64';
// AWS Region where the API Gateway backend API is deployed
const region = 'sa-east-1';
// API Gateway backend API endpoint
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`;

// Serverless offline backend local endpoint
// export const apiEndpoint = 'http://localhost:4000/dev';

// Auth0 configurations - update it for you own APP
export const authConfig = {
    domain: 'dtm.us.auth0.com',
    clientId: 'bZZocuZ2VFCDJ5WAWJqHf9DJOeVYcaAP',
    callbackUrl: 'http://localhost:3000/callback',
};
