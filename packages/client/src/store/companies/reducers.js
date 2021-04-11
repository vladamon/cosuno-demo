import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getCompanyById:
    case types.getCompanyByIds:
    case types.getCompanyOne:
    case types.getCompanyMany:
      return {
        ...state,
        fetching: true,
        filter: action.payload
      }
    case types.getCompanyByIdSuccess:
    case types.getCompanyByIdsSuccess:
    case types.getCompanyOneSuccess:
    case types.getCompanyManySuccess:
      return {
        ...state,
        fetching: false,
        fetchedData: true,
        countTotal: action.payload.count,
        list: {
          page: 1,
          count: action.payload.data.length,
          data: action.payload.data
        }
      }
    case types.getCompanyByIdError:
    case types.getCompanyByIdsError:
    case types.getCompanyOneError:
    case types.getCompanyManyError:
      return {
        ...state,
        fetching: false,
        fetchedData: false,
        error: action.payload
      }
    default: {
      return state
    }
  }
}

export default companiesReducer
