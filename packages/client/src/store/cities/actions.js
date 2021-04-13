import * as types from './types'

// # City

export const getCityById = (data) => ({
  type: types.getCityById,
  payload: data
})

export const getCityByIds = (data) => ({
  type: types.getCityByIds,
  payload: data
})

export const getCityOne = (data) => ({
  type: types.getCityOne,
  payload: data
})

export const getCityMany = (data) => ({
  type: types.getCityMany,
  payload: data
})

export const getCityCount = (data) => ({
  type: types.getCityCount,
  payload: data
})

