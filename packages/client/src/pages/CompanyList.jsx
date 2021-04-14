import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import CompanyListResults from '../components/company/CompanyListResults'
import CompanyListHeader from '../components/company/CompanyListHeader'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../store/companies/actions'

const CompanyList = () => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)

  let companyList = useSelector(state => state.companies.list.data)
  let companiesCount = useSelector(state => state.companies.countTotal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getCompanyMany())
  }, [companyList])

  useEffect(() => {
    dispatch(
      actions.getCompanyMany({
        page,
        limit
      })
    )
  }, [page, limit])

  const onFetchPage = ({ page, limit }) => {
    setPage(page)
    setLimit(limit)
  }

  return (
    <>
      <Helmet>
        <title>Companies | Cosuno</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
        <Box>
          <CompanyListHeader />
        </Box>
        <Box sx={{ pt: 3 }}>
          <CompanyListResults
            companies={companyList}
            countTotal={companiesCount}
            fetchPage={onFetchPage}
          />
        </Box>
        </Container>
      </Box>
    </>
  )
}

export default CompanyList
