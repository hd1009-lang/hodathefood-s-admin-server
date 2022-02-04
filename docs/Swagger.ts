import DefaultModel from './Model.swagger';
import RoleSwagger from './Role.swagger';
import MemberSwagger from './Member.swagger';

const Swagger = {
    swagger: '2.0',
    info: {
        description: "Swagger for hodathefood's admin dasboard",
        version: '1.0.0',
        title: "'Hodathefood's swagger",
    },
    tags: [
        {
            name: 'Roles',
            description: 'Role member ',
        },
        {
            name: 'Members',
            description: 'Member in server',
        },
    ],
    schemes: ['HTTP', 'HTTPS'],
    paths: {
        ...RoleSwagger,
        ...MemberSwagger,
    },
    definitions: {
        ...DefaultModel,
    },
    externalDocs: {
        description: 'Used with Swagger. Click to find out more about Swaggger',
        url: "'http://swagger.io",
    },
};

export default Swagger;
