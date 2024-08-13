import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#13192d', height: 'auto', top: 0 }}>
        <Toolbar sx={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo on the left */}
          <IconButton edge="start" sx={{ padding: 0 }}>
            <img src={Logo} alt="Logo" style={{ width: 300, height: 90, objectFit: 'contain' }} />
          </IconButton>

          {/* Menu Icon for mobile */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Navigation links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none' }}>
                  <IconButton color="inherit">
                    <FacebookIcon />
                  </IconButton>
                </a>
                <a href="https://twitter.com" style={{ color: 'white', textDecoration: 'none' }}>
                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>
                </a>
                <a href="https://instagram.com" style={{ color: 'white', textDecoration: 'none' }}>
                  <IconButton color="inherit">
                    <InstagramIcon />
                  </IconButton>
                </a>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Gallery</Button>
                </a>
                <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Features</Button>
                </a>
                <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">About</Button>
                </a>
                <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Services</Button>
                </a>
                <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Testimonials</Button>
                </a>
                <a href="#qna" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">QnA</Button>
                </a>
                <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Contact</Button>
                </a>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#13192d', color: 'white' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary={<a href="#gallery" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Gallery</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#features" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Features</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#about" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>About</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#services" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Services</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#testimonials" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Testimonials</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#qna" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>QnA</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#contact" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Contact</a>} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
