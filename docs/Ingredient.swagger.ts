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
};

export default IngredientSwagger;
