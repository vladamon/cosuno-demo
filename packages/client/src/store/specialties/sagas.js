import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from './types'
import * as api from '../../api/company'

function * getSpecialtyByIdSaga ({ payload }) {
  try {
    const result = yield call(api.getSpecialtyById, payload)

    yield put({
      type: types.getSpecialtyByIdSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getSpecialtyByIdError,
      payload: ex.message
    })
  }
}

function * getSpecialtyByIdsSaga ({ payload }) {
  try {
    const result = yield call(api.getSpecialtyByIds, payload)

    yield put({
      type: types.getSpecialtyByIdsSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getSpecialtyByIdsError,
      payload: ex.message
    })
  }
}

function * getSpecialtyOneSaga ({ payload }) {
  try {
    const result = yield call(api.getSpecialtyOne, payload)

    yield put({
      type: types.getSpecialtyOneSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getSpecialtyOneError,
      payload: ex.message
    })
  }
}

function * getSpecialtyManySaga ({ payload }) {
  try {
    const result = yield call(api.getSpecialtyMany, payload)

    yield put({
      type: types.getSpecialtyManySuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getSpecialtyManyError,
      payload: ex.message
    })
  }
}

function * getSpecialtyCountSaga ({ payload }) {
  try {
    const result = yield call(api.getSpecialtyCount, payload)

    yield put({
      type: types.getSpecialtyCountSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getSpecialtyCountError,
      payload: ex.message
    })
  }
}


export const sagas = [
  takeLatest(types.getSpecialtyById, getSpecialtyByIdSaga),
  takeLatest(types.getSpecialtyByIds, getSpecialtyByIdsSaga),
  takeLatest(types.getSpecialtyOne, getSpecialtyOneSaga),
  takeLatest(types.getSpecialtyMany, getSpecialtyManySaga),
  takeLatest(types.getSpecialtyCount, getSpecialtyCountSaga)
]
