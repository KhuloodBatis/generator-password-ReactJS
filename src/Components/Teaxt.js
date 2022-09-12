import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


const Teaxt = ({ password, handleCopyPassword, handelGeneratePassword }) => {
    return (
        <>   <Box height={20} width={'420px'} bgcolor={'white'} borderRadius={1}
            padding={2}
            boxShadow={'.25px 2px #bdbdbd'} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateAreas: "textPassword.Icon" }} >

            <Box sx={{ gridRow: '1', gridColumn: 'span 2' }}><Typography>{password}</Typography></Box>

            <Box sx={{ gridRow: '1', gridColumn: '4 / 5' }}> <button onClick={handleCopyPassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><ContentCopyIcon style={{ color: 'gray', fontSize: '19px' }} /></button>

                <button onClick={handelGeneratePassword} style={{ backgroundColor: 'white', borderStyle: 'none', cursor: 'pointer' }}><AutorenewIcon style={{ color: 'gray', fontSize: '19px', transform: "rotateZ(60deg)" }} /></button></Box>
            <ToastContainer
                position="top-center"
                autoClose={500000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </Box></>
    )
}

export default Teaxt