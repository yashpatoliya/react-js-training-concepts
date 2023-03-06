import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BackNavigation = (props) => {
 
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Link to='/'>
                    <h4>Back</h4>                
                </Link>
                <Typography variant="h6">
                    {props.title ? props.title : ''}
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default BackNavigation;