import React from 'react';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";


const App = () => {
  return (
      <Box width="400px" sx={{width: {lg:'1020px' }}} m="auto">
            <Navbar/>
      </Box>
  );
};

export default App;
