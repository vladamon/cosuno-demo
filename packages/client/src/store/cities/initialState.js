const defaultLimit = 10

export const initialState = {
  selected: null,
  fetching: false,
  error: null,
  fetchedData: false,
  filter: null,
  countTotal: 0,
  list: {
    page: 1,
    count: 0,
    data: []
  }
}