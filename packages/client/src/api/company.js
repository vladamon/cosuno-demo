import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

import _ from 'lodash'

export const getCompanyById = id => {
  return companies
}

export const getCompanyByIds = ids => {
  return companies
}

export const getCompanyOne = search => {
  return companies
}

const getFilter = filter => {
  return `{
    OR: [${filter.map(item => `{ specialty: "${item}"}`)}]
  }`
}

const getQueryCompanyList = (page, limit, filter) => {
  const propertyList = `
    _id,
    companyName,
    city,
    specialty,
    email,
    phone
  `
  const queryArgs = `companyMany(
    skip: ${page * limit},
    limit: ${limit}
  `.concat(
    filter && !_.isEmpty(filter) ? `,filter: ${getFilter(filter)})` : `)`
  )

  return gql`
    query {
      ${queryArgs}
      {
        ${propertyList}
      }
    }`
}

const getQueryCompanyCount = filter => {
  return gql`
    query {
      companyCount ${(filter && !_.isEmpty(filter)) ? `(
        filter: ${getFilter(filter)}
      )` : ``}
    }
  `
}

export const getCompanyMany = async ({ page, limit, filter }) => {
  try {
    const result = await client.query({
      query: getQueryCompanyList(page, limit, filter)
    })

    const count = await client.query({
      query: getQueryCompanyCount(filter)
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
