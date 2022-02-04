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
const DefaultModel = {
    Login,
    Role,
    Member,
    Register,
    ApiResponse,
};

export default DefaultModel;
