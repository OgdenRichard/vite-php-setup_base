import * as PropTypes from 'prop-types';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

export const SwitchTheme = ({ mode, setMode }) => {
  return (
    <>
      <Stack
        className="switchmode"
        direction="row"
        sx={{ mt: 1.5, mr: 1.5, cursor: 'pointer' }}
      >
        {mode === 'dark' ? (
          <LightModeIcon
            fontSize="small"
            style={{ color: grey[500] }}
            onClick={() => setMode('light')}
          />
        ) : (
          <NightlightRoundOutlinedIcon
            fontSize="small"
            style={{ color: grey[700] }}
            onClick={() => setMode('dark')}
          />
        )}
      </Stack>
    </>
  );
};

SwitchTheme.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};
