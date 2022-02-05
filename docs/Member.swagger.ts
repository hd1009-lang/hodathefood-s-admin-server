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
                        $ref: '#/definitions/Register',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
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
                                    $ref: '#/definitions/Register',
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

    '/api/members/update/{id}': {
        post: {
            tags: ['Members'],
            summary: 'Update',
            produces: ['application/json'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    description: 'ID of member',
                    required: true,
                    type: 'string',
                },
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
};

export default MemberSwagger;
