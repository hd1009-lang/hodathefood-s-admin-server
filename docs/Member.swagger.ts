const MemberSwagger = {
    '/api/members/create': {
        post: {
            tags: ['Members'],
            summary: 'Add new member',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Add new member',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Member',
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
    '/api/members/list': {
        get: {
            tags: ['Members'],
            summary: 'Get all member',
            responses: {
                '200': {
                    description: 'successful operation',
                    schema: {
                        type: 'object',
                        properties: {
                            data: {
                                type: 'array',
                                items: {
                                    $ref: '#/definitions/Member',
                                },
                            },
                        },
                    },
                },
                '400': {
                    description: 'Invalid status value',
                },
            },
        },
    },
};

export default MemberSwagger;
