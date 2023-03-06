import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Games from "./games";
import Profile from "./profile";
import Main from "./main";
import PropTypes from 'prop-types';

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";


  

const NewNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event.target)
  };

  const TabMenu = styled(Tab)`
    color : white;
    border-top : 2px solid rgba(255, 255,255, 0);
    &.Mui-selected {
        color: white;
        border-color : white;
      }
  `;

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0}}>
        <Toolbar>
          <Tabs
            onChange={handleChange}
            aria-label="icon tabs example"
            sx={{ margin : '0 auto'}}
          >
            <TabMenu icon={<Main />} aria-label="main"  value={value} />
            <TabMenu icon={<Games />} aria-label="games"  value={value}/>
            <TabMenu icon={<Profile />} aria-label="profile" value={value}/>
          </Tabs>
        </Toolbar>
      </AppBar>
   
    </>
  );
};

export default NewNavigation;
