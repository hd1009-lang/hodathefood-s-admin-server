const Role = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
    },
};
const ApiResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
        },
    },
};
const Member = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        membername: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        idRole: {
            type: 'string',
        },
    },
};
const Login = {
    type: 'object',
    properties: {
        membername: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
    },
};
const Register = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        membername: {
            type: 'string',
        },
        idRole: {
            type: 'string',
        },
    },
};
const CateIngredient = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        key: {
            type: 'string',
        },
    },
};
const Ingredient = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        idCate: {
            type: 'string',
        },
        nutrition: {
            type: 'object',
            properties: {
                calo: {
                    type: 'number',
                },
                protein: {
                    type: 'number',
                },
                fat: {
                    type: 'number',
                },
                carb: {
                    type: 'number',
                },
            },
        },
    },
};
const DefaultModel = {
    Login,
    Role,
    Member,
    Register,
    ApiResponse,
    CateIngredient,
    Ingredient,
};

export default DefaultModel;
