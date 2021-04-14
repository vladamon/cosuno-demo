import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'

const ListSearchToolbar = ({ onSearch, ...props}) => {
  const handleKeyUp = e => onSearch(e.target.value)

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>Import</Button>
        <Button sx={{ mx: 1 }}>Export</Button>
        <Button
          color='primary'
          variant='contained'
          onClick={props.onActionButtonClick}
        >
          {props.actionbuttonlabel}
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SvgIcon fontSize='small' color='action'>
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder={props.searchplaceholder}
                variant='outlined'
                onKeyUp={handleKeyUp}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default ListSearchToolbar
