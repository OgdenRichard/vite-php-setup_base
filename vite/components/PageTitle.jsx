import * as PropTypes from 'prop-types';
import { Typography, Divider, Box } from '@mui/material';

export const PageTitle = ({ title, variant, my }) => {
  return (
    <>
      <Box sx={{ my }}>
        <Typography variant={variant} component="h1" gutterBottom>
          {title}
        </Typography>
        <Divider orientation="horizontal" flexItem />
      </Box>
    </>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  my: PropTypes.number,
};

PageTitle.defaultProps = {
  variant: 'h1',
  my: 0,
};
