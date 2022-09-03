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
import img2 from '../assets/img/—Pngtree—hand drawn illustration of standing_5762300.png';
import { blueGrey, grey, red } from '@mui/material/colors';
import { alpha } from '@mui/material';

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
      <AppBar color="secondary" elevation={0} sx={{ backgroundColor: alpha('#89c2cc',0.9) }}>
        <Toolbar variant="dense">
          <Container maxWidth="xl">
            {/* Logo - md */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                component="img"
                sx={{ height: 50, margin: 3, border: 0, display: { xs: 'none', md: 'flex' } }}
                alt="logo."
                src={img1}
              />

              {/* MenuIcon -- XS */}
              <Box
                sx={{ border: 0, marginTop: 1, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
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

              {/* MenuIcon -- md */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'primary.main', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Cart */}
              <Button variant="text" color="inherit">
                Cart
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Header Image -- Wrapper */}
      <Box maxWidth="false" sx={{ overflow: 'hidden', maxHeight: '100vh', display:'grid' }}>
        
        {/* Header Image */}
        <Box
          maxWidth="false"
          sx={{
            position: 'relative',
            display: 'block',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#f0f6f7',
          }}
        />

          {/* human image */}
          {/* <Box
            component="img"
              sx={{ 
                position: 'absolute',
                maxWidth:{ xs: 'auto', md: '100%'}, 
                height:'80%', 
                top:'10vh', 
                left: { xs: '0%', md: '7vh'},
                display: 'block',
                margin:['-35px', '-35px', 0, 0],
              }}
            alt="logo."
            src={img2}
          /> */}

        <Typography
          sx={{
            fontWeight:'bold',
            position: 'absolute',
            top: '30%',
            left: '50%',
            // border: 0.1,
            transform: 'translate(-50%, -50%)',
            display: { xs: 'none', md: 'block' },
            fontSize: 60
          }}
        >
          NEW YEAR SALE!
        </Typography>
        
        <Typography
          sx={{
            fontWeight:'bold',
            position: 'absolute',
            top: '50%',
            left: '50%',
            // border: 0.1,
            transform: 'translate(-50%, -50%)',
            display: { xs: 'none', md: 'block' },
            fontSize: 30
          }}
        >
          offer ends in
        </Typography>
        
        <Box> {/* countdown component */}
          <Typography 
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '70%',
              left: '35%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 50
            }}
          >
            00
          </Typography>

          <Typography 
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '70%',
              left: '45%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 50
            }}
          >
            00
          </Typography>
          <Typography 
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '70%',
              left: '55%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 50
            }}
          >
            00
          </Typography>
          <Typography 
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '70%',
              left: '65%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 50
            }}
          >
            00
          </Typography>

          <Typography
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '76%',
              left: '35%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 16
            }}
          >
            Days
          </Typography>
          <Typography
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '76%',
              left: '45%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 16
            }}
          >
            Hours
          </Typography>
          <Typography
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '76%',
              left: '55%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 16
            }}
          >
            Minutes
          </Typography>
          <Typography
            sx={{
              fontWeight:'bold',
              position: 'absolute',
              top: '76%',
              left: '65%',
              // border: 0.1,
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', md: 'block' },
              fontSize: 16
            }}
          >
            Seconds
          </Typography>
        </Box>

        <Typography sx={{}}>naim right</Typography>
      </Box>

      <Box
        sx={{
          top: 0,
          display: 'grid',
          position: 'relative',
          border: 0,
          width: '100%',
          height: '300vh',
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
