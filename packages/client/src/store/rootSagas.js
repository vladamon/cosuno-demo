import { all } from '@redux-saga/core/effects'
import { sagas as companiesSagas } from './companies/sagas'
import { sagas as citiesSagas } from './cities/sagas'
import { sagas as specialtiesSagas } from './specialties/sagas'

export function * rootSagas () {
  yield all([
    ...companiesSagas,
    ...citiesSagas,
    ...specialtiesSagas
  ])
}
