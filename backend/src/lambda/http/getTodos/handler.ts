import 'source-map-support/register';
import {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    APIGatewayProxyHandlerV2,
} from 'aws-lambda';

import { formatJSONResponse, middyfy } from '../../../utils/lambda';

const handler: APIGatewayProxyHandlerV2 = async (
    event: APIGatewayProxyEventV2,
    context: any
): Promise<APIGatewayProxyResultV2> => {
    // TODO: Get all TODO items for a current user
    // Return the response with items
    return formatJSONResponse(200, { userId: context.userId });
};

export const getTodos = middyfy(handler);
