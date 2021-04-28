import 'source-map-support/register';
import {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    APIGatewayProxyHandlerV2,
} from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
    const todoId = event.pathParameters.todoId;

    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
    return undefined;
};
