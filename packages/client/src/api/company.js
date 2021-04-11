import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

export const getCompanyById = id => {
  return companies
}

export const getCompanyByIds = ids => {
  return companies
}

export const getCompanyOne = search => {
  return companies
}

export const getCompanyMany = async ({ page, limit, filter }) => {
  const result = await client.query({
    query: gql`
      query {
        companyMany(
          skip: ${page * limit},
          limit: ${limit}
        ) {
          _id,
          companyName,
          city,
          specialty,
          email,
          phone
        }
      }
    `
  })

  const count = await client.query({
    query: gql`
      query {
        companyCount
      }
    `
  })

  const res = {
    data: result.data?.companyMany || [],
    count: count.data?.companyCount || 0
  }

  return res
}

export const getCompanyCount = () => {
  return companies
}
