import "./App.css"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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



function App() {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [uppercase, setUppercase] = useState(true);
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
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <React.Fragment  >
        <CssBaseline />
        <Container sx={{ backgroundColor: '#e0e0e0', height: '100vh', width: '200vh', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <h1 style={{ marginTop: '200px' }} > Password Generator</h1>
          <Box sx={{
            backgroundColor: '#fafafa', height: '30vh', width: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-200px', boxShadow: '2px 2px #607d8b'
          }}>
            <h3 style={{ marginTop: '20px' }} > Password Length</h3>
            <Slider defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)} min={4} max={15} aria-label="Default" valueLabelDisplay="auto" sx={{ width: '60vh', marginTop: '90px' }} />
            <h3 style={{ marginTop: '20px' }} > Group label</h3>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', marginTop: '40px' }}>
              <FormControlLabel control={<Checkbox checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)} />} label="Uppercase" />
              <FormControlLabel control={<Checkbox checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />} label="Lowercase" />
              <FormControlLabel control={<Checkbox checked={number} onChange={(e) => setNumber(e.target.checked)} />} label="Numbers" />
              <FormControlLabel control={<Checkbox checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />} label="Symbols" />
            </FormGroup>
          </Box>

          <Box sx={{
            backgroundColor: '#fafafa', height: '7vh', width: '80vh', display: 'flex', flexDirection: 'row', alignItems: 'end', marginTop: '-230px', boxShadow: '2px 2px #607d8b', padding: '20px'
          }}>
            <div style={{ width: '280px' }}>
              <span style={{ fontSize: "20px", fontWeight: 'bold' }}>{password}</span>
            </div>




            <div style={{ marginLeft: '500px', display: 'flex', flexDirection: 'row' }}>
              <button onClick={handleCopyPassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><ContentCopyIcon /></button>

              <button onClick={handelGeneratePassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><CachedIcon /></button>
            </div>
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
            {/* Same as */}
            <ToastContainer />
          </Box>

        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
