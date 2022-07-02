import React from 'react';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import NavigationBarAndAddEvent from "./components/NavigationBarAndAddEvent";


const App = () => {
  return (
      <Box width="400px" sx={{width: {lg:'1020px' }}} m="auto">
            <Navbar/>
          <NavigationBarAndAddEvent/>
      </Box>
  );
};

export default App;
