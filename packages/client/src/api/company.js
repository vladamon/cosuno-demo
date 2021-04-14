import companies from '../__mocks__/customers'
import client from './apolloClient'
import { buildQueryGetMany, buildQueryGetCount } from './helpers/companyHelpers'

export const getCompanyById = id => {
  return companies
}

export const getCompanyByIds = ids => {
  return companies
}

export const getCompanyOne = search => {
  return companies
}

export const getCompanyMany = async ({ page, limit, filter}) => {
  try {
    const query = buildQueryGetMany(page, limit, filter)
    const result = await client.query({
      query: query
    })

    const count = await client.query({
      query: buildQueryGetCount(filter)
    })

    const res = {
      data: result.data?.companyMany || [],
      count: count.data?.companyCount || 0
    }

    return res
  } catch (ex) {
    console.log(ex)
  }
}

export const getCompanyCount = () => {
  return companies
}
