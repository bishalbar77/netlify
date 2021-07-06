import React from 'react';
import './MessageBox.css'
import {
    Button,
    InputAdornment, OutlinedInput,
    TextField
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const MessageBox = () =>{
    return (
        <div className="messageBox" >
            {/*<FormControl variant="filled" fullWidth>
                <FilledInput
                    id="filled-adornment-weight"
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </FormControl>*/}
            <OutlinedInput fullWidth id="outlined-basic" placeholder='Type Message Here' multiline rowsMax={4} variant="outlined" endAdornment={<InputAdornment position="end"><Button variant="contained" style={{backgroundColor: '#206BA4', color: 'white'}}>Send</Button></InputAdornment>}/>
        </div>
    )
}

export default MessageBox;