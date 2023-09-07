import * as React from 'react';
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CssBaseline,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Header, Footer } from '@/components/organisms';

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

  const handleDrawer = () => {
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
      <Header
        handleDrawer={handleDrawer}
        anchorEl={anchorEl}
        handleMenu={handleMenu}
        handleClose={handleClose}
      />
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawer}
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
        <Footer />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
