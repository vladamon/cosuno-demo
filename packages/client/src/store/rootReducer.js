import { combineReducers } from 'redux'
import companiesReducer from './companies/reducers'
import specialtiesReducer from './specialties/reducers'
import citiesReducer from './cities/reducers'

export default combineReducers({
  companies: companiesReducer,
  specialties: specialtiesReducer,
  cities: citiesReducer
})
