import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

export const getSpecialtyById = id => {
  return companies
}

export const getSpecialtyByIds = ids => {
  return companies
}

export const getSpecialtyOne = search => {
  return companies
}

export const getSpecialtyMany = async ({ page = 0, limit = 10, filter }) => {
  const result = await client.query({
    query: gql`
    query {
      specialtyMany(
        skip: ${page * limit},
        limit: ${limit}
      ) {
        _id,
        name
      }
    }`
  })

  const count = await client.query({
    query: gql`
      query {
        specialtyCount
      }
    `
  })

  const res = {
    data: result.data?.specialtyMany || [],
    count: count.data?.specialtyCount || 0
  }

  return res
}

export const getSpecialtyCount = () => {
  return companies
}
