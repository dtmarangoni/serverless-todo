import 'source-map-support/register';
import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2,
} from 'aws-lambda';

import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest';

export const handler: APIGatewayProxyHandlerV2 = async (
    event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
    const todoId = event.pathParameters.todoId;
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body);

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    return undefined;
};
