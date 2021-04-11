import { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core'
import getInitials from '../../utils/getInitials'

const CompanyListResults = ({ companies, countTotal, fetchPage, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const handleSelectAll = event => {
    let newSelectedCustomerIds

    if (event.target.checked) {
      newSelectedCustomerIds = companies.map(company => company._id)
    } else {
      newSelectedCustomerIds = []
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id)
    let newSelectedCustomerIds = []

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      )
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      )
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      )
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      )
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleLimitChange = event => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
    fetchPage({
      page: newPage,
      limit
    })
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedCustomerIds.length === companies.length}
                    color='primary'
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < companies.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Specialty</TableCell>
                <TableCell>Last update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.slice(0, limit).map(company => (
                <TableRow
                  hover
                  key={company._id}
                  selected={selectedCustomerIds.indexOf(company._id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(company._id) !== -1}
                      onChange={event => handleSelectOne(event, company._id)}
                      value='true'
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar src={company.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(company.companyName)}
                      </Avatar>
                      <Typography color='textPrimary' variant='body1'>
                        {company.companyName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{company.email}</TableCell>
                  <TableCell>
                    {company.city}
                  </TableCell>
                  <TableCell>{company.phone}</TableCell>
                  <TableCell>{company.specialty}</TableCell>
                  <TableCell>
                    {moment(company.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={countTotal}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

CompanyListResults.propTypes = {
  companies: PropTypes.array.isRequired
}

export default CompanyListResults
