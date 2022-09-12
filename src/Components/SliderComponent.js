import React from 'react'
import Slider from '@mui/material/Slider';


const SliderComponent = ({ passwordLength, OnChangePasswordLength }) => {
    return (
        <> <Slider aria-label="Small" style={{ width: '250px', height: '3px', marginLeft: '80px', marginTop: '20px' }} defaultValue={passwordLength}
            onChange={OnChangePasswordLength} min={4} max={30} valueLabelDisplay="on">
        </Slider></>
    )
}

export default SliderComponent