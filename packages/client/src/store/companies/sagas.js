import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from './types'
import * as api from '../../api/company'

function * getCompanyByIdSaga ({ payload }) {
  try {
    const result = yield call(api.getCompanyById, payload)

    yield put({
      type: types.getCompanyByIdSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCompanyByIdError,
      payload: ex.message
    })
  }
}

function * getCompanyByIdsSaga ({ payload }) {
  try {
    const result = yield call(api.getCompanyByIds, payload)

    yield put({
      type: types.getCompanyByIdsSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCompanyByIdsError,
      payload: ex.message
    })
  }
}

function * getCompanyOneSaga ({ payload }) {
  try {
    const result = yield call(api.getCompanyOne, payload)

    yield put({
      type: types.getCompanyOneSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCompanyOneError,
      payload: ex.message
    })
  }
}

function * getCompanyManySaga ({ payload }) {
  try {
    const result = yield call(api.getCompanyMany, payload)

    yield put({
      type: types.getCompanyManySuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCompanyManyError,
      payload: ex.message
    })
  }
}

function * getCompanyCountSaga ({ payload }) {
  try {
    const result = yield call(api.getCompanyCount, payload)

    yield put({
      type: types.getCompanyCountSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCompanyCountError,
      payload: ex.message
    })
  }
}


export const sagas = [
  takeLatest(types.getCompanyById, getCompanyByIdSaga),
  takeLatest(types.getCompanyByIds, getCompanyByIdsSaga),
  takeLatest(types.getCompanyOne, getCompanyOneSaga),
  takeLatest(types.getCompanyMany, getCompanyManySaga),
  takeLatest(types.getCompanyCount, getCompanyCountSaga)
]
