import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListFilterGroup from './ListFilterGroup'

import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function ListFilterToolbar ({
  data,
  onFilterChange,
  onActionButtonClick,
  ...rest
}) {
  const classes = useStyles()
  const [state, setState] = useState([])
  const isChecked = id => state.includes(id)

  const handleChange = event => {
    const { id } = event.target

    if (event.target.checked) {
      setState(_.union(state, [id]))
    } else {
      setState(state.filter(item => item !== id))
    }
  }

  const handleClick = () => {
    setState([])
    onActionButtonClick()
  }

  const getFilterList = () =>
    data.reduce((acc, item) => {
      return state.includes(item._id) ? [...acc, item.name] : acc
    }, [])

  useEffect(() => {
    onFilterChange(getFilterList())
  }, [state])

  return (
    <div className={classes.root}>
      <AppBar color='transparent' position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            FILTER BY SPECIALTY:
          </Typography>
          <ListFilterGroup
            data={data}
            onFilterChange={onFilterChange}
            isChecked={isChecked}
            handleChange={handleChange}
          />
          <Button color='inherit' onClick={handleClick}>
            Clear
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
