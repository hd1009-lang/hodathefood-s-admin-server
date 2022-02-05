const AuthSwagger = {
    '/api/members/login': {
        post: {
            tags: ['Auth'],
            summary: 'Login',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Add new member',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Login',
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
    '/api/members/refresh_token': {
        get: {
            tags: ['Auth'],
            summary: 'Refresh token',
            produces: ['application/json'],
            parameters: [],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
                            token: {
                                type: 'string',
                            },
                        },
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
    '/api/members/logout': {
        get: {
            tags: ['Auth'],
            summary: 'Logout',
            responses: {
                '200': {
                    description: 'successful operation',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Invalid status value',
                },
            },
        },
    },
};

export default AuthSwagger;
