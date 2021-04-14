import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ListFilterToolbar from '../shared/ListFilterToolbar'
import ListSearchToolbar from '../shared/ListSearchToolbar'
import { getSpecialtyMany } from '../../store/specialties/actions'
import { getCompanyMany } from '../../store/companies/actions'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const searchProperties = {
  nameRegex: 'nameRegexp',
  specialty: 'specialty'
}

export default function CompanyListHeader () {
  const dispatch = useDispatch()
  const specialties = useSelector(state => state.specialties.list.data)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterParams, setFilterParams] = useState([])

  useEffect(() => {
    dispatch(
      getSpecialtyMany({
        page: 0,
        limit: 10
      })
    )
  }, [])

  useEffect(() => {
    fetchData()
  }, [filterParams, searchTerm])

  const handleToolbarActionButton = e => {
    setFilterParams([])
  }

  const fetchData = () => {
    let args = {
      page: 0,
      limit: 10
    }

    let filter = {}

    if (searchTerm !== '') {
      filter[searchProperties.nameRegex] = searchTerm
    }

    if (filterParams.length > 0) {
      filter[searchProperties.specialty] = filterParams
    }

    if (!_.isEmpty(filter)) {
      args.filter = filter
    }

    dispatch(getCompanyMany(args))
  }

  const handleFilterChange = filterData => {
    setFilterParams(filterData)
  }

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <div>
      <ListSearchToolbar
        actionbuttonlabel={'Add Company'}
        searchplaceholder={'Search companies'}
        onSearch={handleSearch}
      />
      <ListFilterToolbar
        data={specialties}
        onFilterChange={handleFilterChange}
        onActionButtonClick={handleToolbarActionButton}
      />
    </div>
  )
}
