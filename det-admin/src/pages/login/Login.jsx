import { Button, TextField } from '@mui/material'
import { useState } from 'react';

import './Login.css'

function Login() {
    function handleSignIn(){
        const username = document.getElementById('loginusername').value;
        const password = document.getElementById('loginpassword').value;

        if(username.length > 0 && password.length > 0){
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/det-admin/login');
            
            xhr.send(JSON.stringify({username, password}));
        }
    }

    return (
        <>
            <div className='full-hw d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column holder'>
                    <div className=' mb-5'>
                        <div className='heading'>Sign in</div>
                        <div className='subtitle'>Sign in here to accesss the admin panel</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <TextField id='loginusername' className='mb-3' variant='outlined' size='small' type='text' label='Username' />
                        <TextField id='loginpassword' className='my-3' variant='outlined' size='small' type='password' label='Password' />
                        <Button className='my-3' onClick={handleSignIn} variant='contained'>Sign In</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;