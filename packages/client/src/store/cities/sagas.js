import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from './types'
import * as api from '../../api/company'

function * getCityByIdSaga ({ payload }) {
  try {
    const result = yield call(api.getCityById, payload)

    yield put({
      type: types.getCityByIdSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCityByIdError,
      payload: ex.message
    })
  }
}

function * getCityByIdsSaga ({ payload }) {
  try {
    const result = yield call(api.getCityByIds, payload)

    yield put({
      type: types.getCityByIdsSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCityByIdsError,
      payload: ex.message
    })
  }
}

function * getCityOneSaga ({ payload }) {
  try {
    const result = yield call(api.getCityOne, payload)

    yield put({
      type: types.getCityOneSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCityOneError,
      payload: ex.message
    })
  }
}

function * getCityManySaga ({ payload }) {
  try {
    const result = yield call(api.getCityMany, payload)

    yield put({
      type: types.getCityManySuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCityManyError,
      payload: ex.message
    })
  }
}

function * getCityCountSaga ({ payload }) {
  try {
    const result = yield call(api.getCityCount, payload)

    yield put({
      type: types.getCityCountSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getCityCountError,
      payload: ex.message
    })
  }
}


export const sagas = [
  takeLatest(types.getCityById, getCityByIdSaga),
  takeLatest(types.getCityByIds, getCityByIdsSaga),
  takeLatest(types.getCityOne, getCityOneSaga),
  takeLatest(types.getCityMany, getCityManySaga),
  takeLatest(types.getCityCount, getCityCountSaga)
]
