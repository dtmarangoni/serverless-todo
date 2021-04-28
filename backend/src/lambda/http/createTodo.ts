import 'source-map-support/register';
import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2,
} from 'aws-lambda';

import { CreateTodoRequest } from '../../requests/CreateTodoRequest';

export const handler: APIGatewayProxyHandlerV2 = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body);

    // TODO: Implement creating a new TODO item
    return undefined;
};
