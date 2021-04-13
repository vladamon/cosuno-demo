import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getCityById:
    case types.getCityByIds:
    case types.getCityOne:
    case types.getCityMany:
      return {
        ...state,
        fetching: true,
        filter: action.payload
      }
    case types.getCityByIdSuccess:
    case types.getCityByIdsSuccess:
    case types.getCityOneSuccess:
    case types.getCityManySuccess:
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
    case types.getCityByIdError:
    case types.getCityByIdsError:
    case types.getCityOneError:
    case types.getCityManyError:
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
