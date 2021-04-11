import * as types from './types'

// # Company

export const getCompanyById = (data) => ({
  type: types.getCompanyById,
  payload: data
})

export const getCompanyByIds = (data) => ({
  type: types.getCompanyByIds,
  payload: data
})

export const getCompanyOne = (data) => ({
  type: types.getCompanyOne,
  payload: data
})

export const getCompanyMany = (data) => ({
  type: types.getCompanyMany,
  payload: data
})

export const getCompanyCount = (data) => ({
  type: types.getCompanyCount,
  payload: data
})

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

