const companies = require('../data/company')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    companies: (parent, args, context, info) => {
      return companies.filter(company => {
        const reg = new RegExp(`^[A-Za-z]*${args.companyName}[A-Za-z]*$`, 'ig')
        return reg.test(company.company_name)
      })
    },
  },
};

module.exports = resolvers
