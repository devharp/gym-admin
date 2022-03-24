import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountBox, Menu, Settings } from '@mui/icons-material';

import { useDispatch } from "react-redux";
import { actionCreators } from '../../state'

function Navbar(props) {
    const dispatch = useDispatch();
    const desktop_sx = {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
        }
    };

    const mobile_sx = {
        display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none'
        }
    };

    const navbarstyle = {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 50, 0.8)',
        fontSize: '1rem',
        fontWeight: '800'
    };
    return (
        <>
            <Box sx={desktop_sx}>

                <AppBar position={props.position}>
                    <Box className='d-flex flex-row justify-content-end align-items-center px-3 py-2' sx={navbarstyle}>
                        <div className="mx-3"> Profile </div>
                        <div className="mx-3"> Settings </div>

                    </Box>
                </AppBar>
            </Box>
            <Box sx={mobile_sx}>
                <AppBar position={props.position}>
                    <Box className='d-flex flex-row justify-content-between align-items-center px-3 py-2' sx={navbarstyle}>
                        <div className="m-2" onClick={() => { dispatch(actionCreators.setSideBar(true)) } }>
                            <Menu />
                        </div>
                        <div className="d-flex flex-row">
                            <div className="mx-3"> Profile </div>
                            <div className="mx-3"> Settings </div>
                        </div>
                    </Box>
                </AppBar>

            </Box>
        </>);
}

export default Navbar;