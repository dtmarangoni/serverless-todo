import 'source-map-support/register';
import { Key } from 'aws-sdk/clients/dynamodb';
import * as createHttpError from 'http-errors';

import { TodoAccess } from '../ports/AWS/DynamoDB/todoAccess';

// The TODO Access port
const todoAccess = new TodoAccess();

/**
 * Get all user todo items from Todo DynamoDB table with optional
 * pagination.
 * @param userId The user ID.
 * @param limit The optional number of returned items per call.
 * @param exclusiveStartKey The optional DynamoDB TODO item key to
 * start the query from.
 * @returns All user TODO items with optional pagination.
 */
export async function getAllUserTodos(userId: string, limit?: string, exclusiveStartKey?: string) {
    // Validate the query params
    let queryLimit: number;
    let queryExclusiveStartKey: Key;
    if (limit) {
        queryLimit = validateLimitParam(limit);
    }
    if (exclusiveStartKey) {
        queryExclusiveStartKey = decodeNextKey(exclusiveStartKey);
    }

    // Return the user TODO items
    return await todoAccess.getAllUserTodos(userId, queryLimit, queryExclusiveStartKey);
}

/**
 * Validate if the limit query parameter exists and it's positive.
 * @param limit Retrieval limit number of items for DB query operation.
 */
function validateLimitParam(limit: string) {
    // Validate the limit query parameter
    if (+limit <= 0) {
        throw new createHttpError.BadRequest('The pagination limit should be a positive number.');
    } else {
        return +limit;
    }
}

/**
 * Encode last evaluated key from DynamoDB item.
 * @param {Key} lastEvaluatedKey a JS object that represents last
 * evaluated key.
 * @return {string} URI encoded last evaluated key.
 */
export function encodeNextKey(lastEvaluatedKey: Key): string {
    if (!lastEvaluatedKey) return undefined;

    return encodeURIComponent(JSON.stringify(lastEvaluatedKey));
}

/**
 * Decode last evaluated key from DynamoDB item.
 * @param {string} lastEvaluatedKey a JS object that represents last
 * evaluated key.
 * @return {Key} URI encoded last evaluated key
 */
function decodeNextKey(lastEvaluatedKey: string): Key {
    return JSON.parse(decodeURIComponent(lastEvaluatedKey));
}
