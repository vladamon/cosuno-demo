import { combineReducers } from 'redux'
import companiesReducer from './companies/reducers'

export default combineReducers({
  companies: companiesReducer
})
