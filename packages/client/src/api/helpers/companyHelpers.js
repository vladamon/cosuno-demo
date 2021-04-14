import { gql } from '@apollo/client'
import lodash from 'lodash'

const queryPropertyList = `
    _id,
    companyName,
    city,
    specialty,
    email,
    phone
  `

const buildFilter = (filter) => {
  const { specialty, nameRegexp } = filter

  let gqlString = ',filter: {'

  if (specialty && specialty.length > 1) {
    gqlString = gqlString.concat(`OR: [${specialty.map(item => `{ specialty: "${item}"}`)}]`)
  } else if (specialty && specialty.length === 1) {
    gqlString = gqlString.concat(`specialty: "${specialty[0]}"`)
  }

  if (nameRegexp) {
    gqlString = gqlString.concat(`nameRegexp: "${nameRegexp}"`)
  }

  gqlString = gqlString.concat('}')

  return gqlString
}

const getFilter = (filter) => {
  let out = ''

  if (!filter || lodash.isEmpty(filter)) {
    out = ``
  } else {
    out = buildFilter(filter)
  }

  return out
}

export const buildQueryGetMany = (page, limit, filter) => {
  const queryArgs = `companyMany(
    skip: ${page * limit},
    limit: ${limit}
    ${getFilter(filter)}
    )`

  const ret = gql`
    query {
      ${queryArgs}
      {
        ${queryPropertyList}
      }
    }`

  return ret
}

export const buildQueryGetCount = (filter) => {
  return gql`
    query {
      companyCount
      ${!lodash.isEmpty(filter) ? `(
        ${getFilter(filter)}
      )` : ``}
    }
  `
}