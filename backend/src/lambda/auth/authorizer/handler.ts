import 'source-map-support/register';
import {
    APIGatewayTokenAuthorizerHandler,
    APIGatewayTokenAuthorizerEvent,
    APIGatewayAuthorizerResult,
} from 'aws-lambda';

import { createLogger } from '../../../utils/logger';
import { validateAuthToken } from '../../../layers/business/authorizer';

// Winston logger
const logger = createLogger('auth');

export const handler: APIGatewayTokenAuthorizerHandler = async (
    event: APIGatewayTokenAuthorizerEvent
) => {
    logger.info('Authorizing an user', event.authorizationToken);

    try {
        // Retrieve the validated and decoded auth token
        const decodedToken = await validateAuthToken(event.authorizationToken);
        // Valid token, allow access to lambda functions with an Allow
        // IAM policy
        logger.info('User was authorized', decodedToken);
        return generateIAMPolicy(true, decodedToken.payload.sub);
    } catch (error) {
        // User not authorized, thus send the deny policy to API
        // Gateway
        logger.error('User not authorized', { error: error.message });
        return generateIAMPolicy(false, 'unauthorized user');
    }
};

/**
 * Generates an API Gateway IAM policy to allow or deny user access to
 * API resources.
 * @param userAuthorized Indicates whether the user is authorized or
 * not according to auth token from request headers.
 * @param userId The user id.
 * @returns The IAM policy allowing or denying access to API resources.
 */
function generateIAMPolicy(userAuthorized: boolean, userId: string) {
    // IAM Policy to be sent to API Gateway
    const iamPolicy: APIGatewayAuthorizerResult = {
        principalId: userId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [{ Effect: 'Deny', Action: 'execute-api:Invoke', Resource: '*' }],
        },
    };

    if (userAuthorized) {
        iamPolicy.policyDocument.Statement[0].Effect = 'Allow';
        // User authorized, return the Allow Policy
        return iamPolicy;
    }

    // User not authorized, thus send the deny policy
    return iamPolicy;
}
