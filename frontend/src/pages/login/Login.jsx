import { Button, TextField, Typography } from '@mui/material'


function Login() {
    const style={
        height: '100%',
        width: '100%'
    }

    function handleSignIn(){
        const username = document.getElementById('loginusername').value;
        const password = document.getElementById('loginpassword').value;

        if(username.length > 0 && password.length > 0){
            const xhr = new XMLHttpRequest();
            
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={style}>
                <div className='d-flex flex-column holder'>
                    <div className='mb-3'>
                        <Typography className='my-2' fontWeight='fontWeightBold' variant='h3'>Sign in</Typography>
                        <Typography className='my-2' fontWeight='fontWeightLight' variant='subtitle2'>Sign in here to accesss the admin panel</Typography>
                    </div>
                    <div className='d-flex flex-column'>
                        <TextField id='loginusername' className='mb-3' variant='outlined' size='small' type='text' label='Username' />
                        <TextField id='loginpassword' className='my-3' variant='outlined' size='small' type='password' label='Password' />
                        <Button className='mt-3' onClick={handleSignIn} variant='contained'>Sign In</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;