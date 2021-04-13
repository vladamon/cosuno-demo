import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

export const getCityById = id => {
  return companies
}

export const getCityByIds = ids => {
  return companies
}

export const getCityOne = search => {
  return companies
}

export const getCityMany = async ({ page, limit, filter }) => {
  const result = await client.query({
    query: gql`
      query {
        cityMany(
          skip: ${page * limit},
          limit: ${limit}
        ) {
          _id,
          name
        }
      }
    `
  })

  const count = await client.query({
    query: gql`
      query {
        cityCount
      }
    `
  })

  const res = {
    data: result.data?.companyMany || [],
    count: count.data?.companyCount || 0
  }

  return res
}

export const getCityCount = () => {
  return companies
}
