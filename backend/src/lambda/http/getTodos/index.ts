export const getTodos = {
    handler: `${__dirname
        .split(process.cwd())[1]
        .substring(1)
        .replace(/\\/g, '/')}/handler.getTodos`,
    events: [
        {
            http: {
                method: 'get',
                path: 'todos',
                cors: true,
                authorizer: {
                    name: 'Authorizer',
                    arn: { 'Fn::GetAtt': ['AuthorizerLambdaFunction', 'Arn'] },
                },
            },
        },
    ],
    // iamRoleStatements: [
    //     {
    //         Effect: 'Allow',
    //         Action: ['dynamoDB:Scan'],
    //         Resource:
    //             'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.GROUPS_TABLE}',
    //     },
    // ],
};
