import "./App.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import GeneratorPassword from "./Components/GeneratorPassword";


function App() {




  return (
    <Box display={'flex'} justifyContent={'center'} bgcolor={'#e9e9e9'} minHeight={"100vh"} paddingTop={'0px'}
      alignItems={'flex-start'}
      flexDirection={'column'}
      alignItems={'center'} >

      <Typography variant={"h2"} fontSize={'32px'} fontFamily={'lnter,sans-serif'} marginBottom={'26px'}>
        Password Generator
      </Typography>
      <GeneratorPassword />


    </Box>
  );
}

export default App;



