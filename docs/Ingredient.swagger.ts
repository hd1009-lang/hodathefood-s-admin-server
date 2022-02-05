const IngredientSwagger = {
    '/api/ingredients/cate/create': {
        post: {
            tags: ['Ingredients'],
            produces: ['application/json'],
            parameters: [
                {
                    name: 'name',
                    in: 'body',
                    description: 'Create name of the cate-ingredient',
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                        },
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'successful operation',
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
                            data: {
                                type: 'array',
                                items: {
                                    $ref: '#/definitions/CateIngredient',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    '/api/ingredients/all': {
        get: {
            tags: ['Ingredients'],
            summary: 'Get all member',
            parameters: [
                {
                    name: 'page',
                    in: 'query',
                    description: 'Page',
                    type: 'string',
                },
            ],
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
    '/api/ingredients/create': {
        post: {
            tags: ['Ingredients'],
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Add new member',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Ingredient',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'successful operation',
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
                            data: {
                                $ref: '#/definitions/Ingredient',
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
    '/api/ingredients/update/{id}': {
        post: {
            tags: ['Ingredients'],
            produces: ['application/json'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    description: 'ID of ingredient',
                    required: true,
                    type: 'string',
                },
                {
                    in: 'body',
                    name: 'body',
                    description: 'Add new ingredient',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Ingredient',
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
                    description: 'Invalid status value',
                },
            },
        },
    },
    '/api/ingredients/remove/{id}': {
        get: {
            tags: ['Ingredients'],
            summary: 'Remove ingredients',
            produces: ['application/json'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    description: 'ID of member',
                    required: true,
                    type: 'string',
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
                    description: 'Invalid status value',
                },
            },
        },
    },
};

export default IngredientSwagger;
