import React from 'react'
import { useState } from 'react'
import { numbers, uppercaseLetters, lowercaseLetters, specialSymbols } from '../Services/Characters'
import 'react-toastify/dist/ReactToastify.css';
import { COPY_SUCCESS } from '../Services/message'
import Box from '@mui/material/Box';
import notify from '../Components/notify'
import Teaxt from './Teaxt';
import PasswordLength from './PasswordLength';
import SliderComponent from './SliderComponent';
import CheckBoxs from './CheckBoxs';

const GeneratorPassword = () => {

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

    const OnChangePasswordLength = (e, charactersList) => {
        setPasswordLength(e.target.value)
        handelGeneratePassword()
    }

    const copyPassword = () => {
        const newText = document.createElement('textarea')
        newText.innerText = password
        document.body.appendChild(newText)
        newText.select()
        document.execCommand('copy')
        newText.remove()
    }


    const handleCopyPassword = (e) => {

        if (password === '') {
            notify('Nothing To Copy', true)
        } else {
            copyPassword()
            notify(COPY_SUCCESS)
        }
    }

    const ChangeUppercase = (e) => setUppercase(e.target.checked);
    const CahngeLowercase = (e) => setLowercase(e.target.checked);
    const CahngeNumber = (e) => setNumber(e.target.checked);
    const CahngeSymbols = (e) => setSymbols(e.target.checked)


    return (
        <>
            <Box height={150} width={'420px'} bgcolor={'white'} borderRadius={1}
                padding={2}
                boxShadow={'.25px 2px #bdbdbd'} marginBottom={'15px'} >
                <PasswordLength></PasswordLength>
                <SliderComponent passwordLength={passwordLength} OnChangePasswordLength={OnChangePasswordLength} ></SliderComponent>
                <CheckBoxs uppercase={uppercase} ChangeUppercase={ChangeUppercase} lowercase={lowercase} CahngeLowercase={CahngeLowercase} number={number} CahngeNumber={CahngeNumber} symbols={symbols} CahngeSymbols={CahngeSymbols}  ></CheckBoxs>
            </Box>
            <Teaxt password={password} handleCopyPassword={handleCopyPassword} handelGeneratePassword={handelGeneratePassword}></Teaxt>

        </>
    )
}

export default GeneratorPassword