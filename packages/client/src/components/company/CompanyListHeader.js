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

export default function CompanyListHeader () {
  const dispatch = useDispatch()
  const specialties = useSelector(state => state.specialties.list.data)
  const [filter, setFilter] = useState([])

  useEffect(() => {
    dispatch(
      getSpecialtyMany({
        page: 0,
        limit: 10
      })
    )
  }, [])

  useEffect(() => {
    let args = {
      page: 0,
      limit: 10
    }

    if (filter.length > 0) {
      _.assign(args, {filter})
    }

    dispatch(
      getCompanyMany(args)
    )
  }, [filter])

  const handleToolbarActionButton = e => {
    setFilter([])
  }

  const onFilterChange = filterData => {
    console.log(filterData)
    setFilter(filterData)
  }

  return (
    <div>
      <ListSearchToolbar
        actionButtonLabel={'Add Company'}
        searchPlaceholder={'Search companies'}
      />
      <ListFilterToolbar
        data={specialties}
        onFilterChange={onFilterChange}
        onActionButtonClick={handleToolbarActionButton}
      />
    </div>
  )
}
