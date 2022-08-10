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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import img1 from '../assets/img/JIMAT.png';
import headerImg from '../assets/img/pexels-mart-production-8869417.jpg';
import { grey } from '@mui/material/colors';

const pages = ['Products', 'Pricing', 'Blog'];
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

  return (
    <>
      <AppBar color="secondary" elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Toolbar variant="dense">
          <Container maxWidth="xl">
            {/* Logo - 1 */}

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                component="img"
                sx={{ height: 50, margin: 3, border: 0, display: { xs: 'none', md: 'flex' } }}
                alt="logo."
                src={img1}
              />

              {/* Menu Pages -- 2  */}

              {/* MenuIcon -- XS */}
              <Box sx={{ marginTop: 1, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ fontSize: 32 }} />
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* MenuIcon -- XS -- end */}

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Cart -- 3 */}

              <Button variant="text" color="inherit">
                Cart
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Box maxWidth="false" sx={{ overflow: 'hidden', maxHeight: '100vh' }}>
        <Box
          maxWidth="false"
          sx={{
            border: 0,
            position: 'relative',
            display: 'block',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
          component="img"
          src={headerImg}
        />
      </Box>

      <Box
        sx={{
          top: 0,
          display: 'grid',
          position: 'relative',
          border: 0,
          width: '100%',
          height: '50vh',
          margin: 0,
          padding: 0,
          backgroundColor: grey[50],
        }}
      >
        Content 2
      </Box>
    </>
  );
};

export default ResponsiveAppBar;
