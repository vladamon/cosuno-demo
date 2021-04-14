import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ListFilterBox({ data, onFilterChange, isChecked, handleChange, ...rest}) {
  return (
    <FormGroup row>
      {data.map(item => <FormControlLabel
        control={
          <Checkbox
            checked={isChecked(item._id)}
            onChange={handleChange}
            name={item.name}
            color="primary"
            id={item._id}
          />
        }
        label={item.name}
      />)}
    </FormGroup>
  );
}
