const RoleSwagger = {
    '/api/roles/create': {
        post: {
            tags: ['Roles'],
            summary: 'Add new role',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Add new role',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Role',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
};

export default RoleSwagger;
