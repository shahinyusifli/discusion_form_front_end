import authFindUser from "../services/Auth/auth-find-user";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from "react-router-dom";
import authGetUserName from "../services/User/get-user-name";
import authGetUserRole from "../services/User/get-user-role";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = authFindUser()

  let authPages = [{ pageName: 'Dashboard', link: '/dashboard' }, { pageName: 'New Post', link: '/dashbaord/post' }, { pageName: 'Topic', link: '/topic' }];
  let openPages = [{ pageName: 'Products', link: '' }];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RocketLaunchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DevAcademyForm
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {console.log(user !== null)}
              {user !== null ? authPages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.pageName}</Typography>
                </MenuItem>
              )) : openPages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.pageName}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <RocketLaunchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>



            {user && <MenuItem component={Link} to="/dashboard" onClick={handleClose}>Dashboard</MenuItem>}
            {user && <MenuItem component={Link} to="/dashbaord/post" onClick={handleClose}>Create topic</MenuItem>}
            {user || <MenuItem component={Link} to="/login" onClick={handleClose}>Login</MenuItem>}
            {user || <MenuItem component={Link} to="/register" onClick={handleClose}>Register</MenuItem>}
            {user && <MenuItem component={Link} to="/logout" onClick={handleClose}>Logout</MenuItem>}
            {user && <MenuItem component={Link} to="/topic" onClick={handleClose}>Topics</MenuItem>}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar >{authGetUserName()[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Container>

                <Typography>Your role is {authGetUserRole()}</Typography>
              </Container>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
