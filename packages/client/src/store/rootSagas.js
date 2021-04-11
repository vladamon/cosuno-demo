import { all } from '@redux-saga/core/effects'
import { sagas as companiesSagas } from './companies/sagas'

export function * rootSagas () {
  yield all([...companiesSagas])
}
