import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";

const CheckBoxs = ({ uppercase, ChangeUppercase, lowercase, CahngeLowercase, number, CahngeNumber, symbols, CahngeSymbols }) => {



    return (
        <>
            <Typography variant={"h2"} fontSize={'11px'} fontFamily={'lnter,sans-serif'} marginBottom={'5px'} marginLeft={'184px'} marginTop={'5px'} style={{ fontWeight: 'bold' }} >
                Group label
            </Typography>
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', marginLeft: '30px' }} >
                <FormControlLabel control={<Checkbox defaultChecked size="small" checked={uppercase}
                    onChange={ChangeUppercase} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Uppercase"}</span>} />
                <FormControlLabel control={<Checkbox defaultChecked size="small" checked={lowercase} onChange={CahngeLowercase} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Lowercase"}</span>} />
                <FormControlLabel control={<Checkbox defaultChecked size="small" checked={number} onChange={CahngeNumber} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Numbers"}</span>} />
                <FormControlLabel control={<Checkbox defaultChecked size="small" checked={symbols} onChange={CahngeSymbols} />} label={<span style={{ fontSize: '12px', marginLeft: '-4px' }}>{"Symbols"}</span>} />
            </FormGroup></>
    )
}

export default CheckBoxs