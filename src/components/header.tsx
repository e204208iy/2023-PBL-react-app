
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"

export default function ButtonAppBar() {
    const navigate = useNavigate();

    const handlClickToIndex = () => {
        navigate('/');
    }
  return (
    <Box sx={{ flexGrow: 1, mb:2}}>
      <AppBar position="static" sx={{bgcolor:"#009A57"}}>
        <Toolbar>
          <Typography onClick={handlClickToIndex} variant="h6" component="div" sx={{ flexGrow: 1,letterSpacing: 6}}>
            久留米原種育成（株）
          </Typography>
          <Button color="inherit" onClick={()=>navigate('signin') }>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
