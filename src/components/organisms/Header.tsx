import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@mui/material';

interface Props {
  handleDrawer: () => void;
  anchorEl: null | HTMLElement;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

const Header = (props: Props) => {
  const { handleDrawer, anchorEl, handleMenu, handleClose } = props;
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawer}
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
  );
};

export default Header;
