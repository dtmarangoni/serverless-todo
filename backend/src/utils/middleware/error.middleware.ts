import { formatJSONResponse } from '../lambda';

/**
 * Middy custom error middleware to catch all errors in the chain.
 */
export const errorMiddleware = () => {
    return {
        onError: async (request: any) => {
            console.log(request);
            const statusCode = request.error.statusCode ? request.error.statusCode : 500;
            const message = request.error.message
                ? request.error.message
                : 'An unexpected error happened.';
            request.response = formatJSONResponse(statusCode, { message });
        },
    };
};
