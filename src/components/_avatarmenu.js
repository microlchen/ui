import { Alert } from '@mui/material';
import React from 'react';
import MainButton from './_generalbutton';

function Menua() {

    const logout = () => {
        alert("This will log you out, not integrated yet")
    };

    const deleteuser = () => {
        alert("This will delete all tracklist, not integrated yet")
    };

    return (
        <nav>
            <MainButton name="Log Out" function1={logout}/>
            <MainButton name="Delete User Data" function1={deleteuser}/>
        </nav>
    );
}

export default Menua;
