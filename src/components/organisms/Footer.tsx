import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="inherit" align="right">
        &copy; AyisDev. {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
