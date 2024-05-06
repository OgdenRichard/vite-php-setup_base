import { AppBar, Box, Stack, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(109, 161, 33)' : 'grey',
      fontFamily: 'Roboto',
      fontSize: '16px',
    };
  };
  return (
    <>
      <AppBar position="fixed" color="default">
        <Box mx="auto" sx={{ width: '75%' }}>
          <Stack
            display="flex"
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'center', sm: 'flex-end' }}
            justifyContent="space-between"
            sx={{ mx: 2 }}
          >
            <Box>
              <figure>
                <NavLink to="/home" className="header__logo">
                  <img src={logo} alt="Wealth Health logo" />
                </NavLink>
                <figcaption>Wealth Health</figcaption>
              </figure>
            </Box>
            <Stack
              display="flex"
              direction="row"
              alignItems="flex-start"
              gap={2}
              sx={{ mb: 2 }}
            >
              <Box>
                <NavLink to="/home" style={navLinkStyle}>
                  Home
                </NavLink>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box>
                <NavLink to="/employees" style={navLinkStyle}>
                  Employees
                </NavLink>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </AppBar>
    </>
  );
};
