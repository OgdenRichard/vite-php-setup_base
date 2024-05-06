import * as PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const TableFilter = ({ filter, setFilter }) => {
  return (
    <>
      <TextField
        label="Search"
        value={filter || ''}
        variant="outlined"
        size="small"
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2, width: '20%', ml: 'auto' }}
        style={{ minWidth: 100 }}
      />
    </>
  );
};

TableFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

TableFilter.defaultProps = {
  filter: undefined,
};
