import { SchemaComposer } from 'graphql-compose';

import '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { CityQuery, CityMutation } from './city'
import { CompanyQuery, CompanyMutation } from './company'
import { SpecialtyQuery, SpecialtyMutation } from './specialty'


schemaComposer.Query.addFields({
    ...CityQuery,
    ...CompanyQuery,
    ...SpecialtyQuery
});

schemaComposer.Mutation.addFields({
    ...CityMutation,
    ...CompanyMutation,
    ...SpecialtyMutation
});

export default schemaComposer.buildSchema();