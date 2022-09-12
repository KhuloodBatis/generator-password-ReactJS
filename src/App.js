import "./App.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CachedIcon from '@mui/icons-material/Cached';
import { useState } from 'react'
import { numbers, uppercaseLetters, lowercaseLetters, specialSymbols } from './Characters'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { COPY_SUCCESS } from './message'
import { Typography } from "@mui/material";






function App() {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);


  const handelGeneratePassword = (e) => {
    if (!uppercase && !lowercase && !number && !symbols) {
      notify('You must Select At aleast one option ', true)
    }
    let charactersList = '';
    if (uppercase) {
      charactersList = charactersList + uppercaseLetters
    }
    if (lowercase) {
      charactersList = charactersList + lowercaseLetters
    }
    if (number) {
      charactersList = charactersList + numbers
    }
    if (symbols) {
      charactersList = charactersList + specialSymbols
    }

    setPassword(createPassword(charactersList))

  }


  const createPassword = (charactersList) => {
    let password = '';
    const charactersListLength = charactersList.length
    for (let i = 0; i < passwordLength; i++) {
      const charactersIndex = Math.round(Math.random() * charactersListLength)
      password = password + charactersList.charAt(charactersIndex)
    }

    return password;
  }

  const copyPassword = () => {
    const newText = document.createElement('textarea')
    newText.innerText = password
    document.body.appendChild(newText)
    newText.select()
    document.execCommand('copy')
    newText.remove()
  }

  const notify = (message, hasError = false) => {

    if (hasError) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }
  const handleCopyPassword = (e) => {

    if (password === '') {
      notify('Nothing To Copy', true)
    } else {
      copyPassword()
      notify(COPY_SUCCESS)
    }

  }



  return (
    <Box display={'flex'} justifyContent={'center'} bgcolor={'#e9e9e9'} minHeight={"100vh"} paddingTop={'0px'}
      alignItems={'flex-start'}
      flexDirection={'column'}
      alignItems={'center'} >

      <Typography variant={"h2"} fontSize={'32px'} fontFamily={'lnter,sans-serif'} marginBottom={'26px'}>
        Password Generator
      </Typography>
      <Box height={150} width={'420px'} bgcolor={'white'} borderRadius={1}
        padding={2}
        boxShadow={'.25px 2px #bdbdbd'} marginBottom={'15px'} >
        <Typography variant={"h2"} fontSize={'10px'} fontFamily={'lnter,sans-serif'} marginBottom={'26px'} marginLeft={'170px'} marginTop={'2px'} style={{ fontWeight: 'bold' }} >
          Password Length
        </Typography>
        <Slider aria-label="Small" style={{ width: '250px', height: '3px', marginLeft: '80px', marginTop: '20px' }} defaultValue={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)} min={4} max={30} valueLabelDisplay="on">

        </Slider>
        <Typography variant={"h2"} fontSize={'11px'} fontFamily={'lnter,sans-serif'} marginBottom={'5px'} marginLeft={'184px'} marginTop={'5px'} style={{ fontWeight: 'bold' }} >
          Group label
        </Typography>

        <FormGroup sx={{ display: 'flex', flexDirection: 'row', marginLeft: '30px' }} >
          <FormControlLabel control={<Checkbox defaultChecked size="small" checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Uppercase"}</span>} />
          <FormControlLabel control={<Checkbox defaultChecked size="small" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Lowercase"}</span>} />
          <FormControlLabel control={<Checkbox defaultChecked size="small" checked={number} onChange={(e) => setNumber(e.target.checked)} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Numbers"}</span>} />
          <FormControlLabel control={<Checkbox defaultChecked size="small" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Symbols"}</span>} />
        </FormGroup>

      </Box>
      <Box height={20} width={'420px'} bgcolor={'white'} borderRadius={1}
        padding={2}
        boxShadow={'.25px 2px #bdbdbd'} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateAreas: "textPassword.Icon" }} >

        <Box sx={{ gridRow: '1', gridColumn: 'span 2' }}><Typography>{password}</Typography></Box>

        <Box sx={{ gridRow: '1', gridColumn: '4 / 5' }}> <button onClick={handleCopyPassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><ContentCopyIcon style={{ color: 'gray', fontSize: '19px' }} /></button>

          <button onClick={handelGeneratePassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><CachedIcon style={{ color: 'gray', fontSize: '19px' }} /></button></Box>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </Box>

    </Box>
  );
}

export default App;



