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
        username: {
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
const DefaultModel = {
    Role,
    Member,
    ApiResponse,
};

export default DefaultModel;
