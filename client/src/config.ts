// API Gateway backend API ID
const apiId = '...';
// AWS Region where the API Gateway backend API is deployed
const region = '...';
// API Gateway backend API endpoint
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`;

// Serverless offline backend local endpoint
// export const apiEndpoint = 'http://localhost:4000/dev';

// Auth0 configurations - update it for you own APP
export const authConfig = {
    domain: '...',
    clientId: '...',
    callbackUrl: 'http://localhost:3000/callback',
};
