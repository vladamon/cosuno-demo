import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getSpecialtyById:
    case types.getSpecialtyByIds:
    case types.getSpecialtyOne:
    case types.getSpecialtyMany:
      return {
        ...state,
        fetching: true,
        filter: action.payload
      }
    case types.getSpecialtyByIdSuccess:
    case types.getSpecialtyByIdsSuccess:
    case types.getSpecialtyOneSuccess:
    case types.getSpecialtyManySuccess:
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
    case types.getSpecialtyByIdError:
    case types.getSpecialtyByIdsError:
    case types.getSpecialtyOneError:
    case types.getSpecialtyManyError:
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
