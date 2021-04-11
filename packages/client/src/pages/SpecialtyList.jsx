import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CompanyListResults from '../components/company/CompanyListResults';
import CompanyListToolbar from '../components/company/CompanyListToolbar';
import customers from '../__mocks__/customers'

const SpecialtyList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CompanyListToolbar />
        <Box sx={{ pt: 3 }}>
          <CompanyListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default SpecialtyList;
