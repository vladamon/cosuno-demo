import * as types from './types'

// # Specialty

export const getSpecialtyById = (data) => ({
  type: types.getSpecialtyById,
  payload: data
})

export const getSpecialtyByIds = (data) => ({
  type: types.getSpecialtyByIds,
  payload: data
})

export const getSpecialtyOne = (data) => ({
  type: types.getSpecialtyOne,
  payload: data
})

export const getSpecialtyMany = (data) => ({
  type: types.getSpecialtyMany,
  payload: data
})

export const getSpecialtyCount = (data) => ({
  type: types.getSpecialtyCount,
  payload: data
})

