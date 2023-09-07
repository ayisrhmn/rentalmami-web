import * as React from 'react';
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  Card,
  CardContent,
  Breadcrumbs,
} from '@mui/material';

interface Props {
  children: React.ReactNode;
  window?: () => Window;
}

const drawerWidth = 56;
const drawerWidthOpen = 200;

const DefaultLayout = (props: Props) => {
  const { children, window } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <>
      <Toolbar variant="dense" />
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <List dense>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon>dashboard</Icon>
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            RentalMami App
          </Typography>
          <Typography variant="subtitle2">admin</Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Icon>account_circle</Icon>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ p: 0 }}
          >
            <Box sx={{ width: 160 }}>
              <MenuList dense>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidthOpen,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: !open ? drawerWidth : drawerWidthOpen,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: !open ? drawerWidth : drawerWidthOpen,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.primary">
            Dashboard
          </Typography>
        </Breadcrumbs>
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
        <footer>
          <Typography variant="body2" color="inherit" align="right">
            &copy; AyisDev. {new Date().getFullYear()}
          </Typography>
        </footer>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
