import {TextField,Button,} from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return(
        <Box >
      <TextField
        label="Username"
        // value={username}
        // onChange={handleUsernameChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        // value={password}
        // onChange={handlePasswordChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
    )
};

export default Login;