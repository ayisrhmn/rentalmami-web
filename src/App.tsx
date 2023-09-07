import DefaultLayout from '@/layouts/DefaultLayout';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <DefaultLayout>
      <Typography gutterBottom variant="h6" component="div">
        Hi, admin
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Dashboard RentalMami App
      </Typography>
    </DefaultLayout>
  );
};

export default App;
