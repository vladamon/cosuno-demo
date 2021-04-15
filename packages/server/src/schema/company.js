import { Company, CompanyTC } from '../models/company';

const extendedResolver = CompanyTC.getResolver('findMany').addFilterArg({
  name: 'nameRegexp',
  type: 'String',
  description: 'Search by regExp',
  query: (query, value) => {
    query.companyName = new RegExp(value, 'i'); // eslint-disable-line
  },
});
extendedResolver.name = 'findMany';
CompanyTC.addResolver(extendedResolver);

const countExtendedResolver = CompanyTC.getResolver('count').addFilterArg({
  name: 'nameRegexp',
  type: 'String',
  description: 'Search by regExp',
  query: (query, value) => {
    query.companyName = new RegExp(value, 'i'); // eslint-disable-line
  },
});
countExtendedResolver.name = 'count';
CompanyTC.addResolver(countExtendedResolver);

export const CompanyQuery = {
  companyById: CompanyTC.getResolver('findById'),
  companyByIds: CompanyTC.getResolver('findByIds'),
  companyOne: CompanyTC.getResolver('findOne'),
  companyMany: CompanyTC.getResolver('findMany'),
  companyCount: CompanyTC.getResolver('count'),
  companyConnection: CompanyTC.getResolver('connection'),
  companyPagination: CompanyTC.getResolver('pagination'),
}

export const CompanyMutation = {
  companyCreateOne: CompanyTC.getResolver('createOne'),
  companyCreateMany: CompanyTC.getResolver('createMany'),
  companyUpdateById: CompanyTC.getResolver('updateById'),
  companyUpdateOne: CompanyTC.getResolver('updateOne'),
  companyUpdateMany: CompanyTC.getResolver('updateMany'),
  companyRemoveById: CompanyTC.getResolver('removeById'),
  companyRemoveOne: CompanyTC.getResolver('removeOne'),
  companyRemoveMany: CompanyTC.getResolver('removeMany'),
}

