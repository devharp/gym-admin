import Navbar from '../../components/Navbar'
import Desktop from '../../layout/Desktop';
import Mobile from '../../layout/Mobile';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, Typography } from '@mui/material';


import { useState } from 'react';

function MainDash(props) {

    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => { setDrawer(open); }



    return (
        <>
            <Desktop>
                <div className='d-flex flex-row' style={{ minHeight: '500px', height: '100vh' }}>
                    <div className='py-4 px-3' style={{ width: '300px' }}>
                        {props.sideoptions}
                    </div>
                    <div style={{ height: '100%', width: '1px', backgroundColor: 'rgb(207, 207, 207)' }}></div>
                    <div className='d-flex flex-column flex-grow-1'>
                        <div className='h3 d-flex justify-content-center'>{props.toplabel}</div>
                        <div className='flex-grow-1' style={{ overflowY: 'scroll' }}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className='d-flex flex-column' style={{ height: '100vh' }}>
                    <Box boxShadow={2} className='d-flex justify-content-between align-items-center h3 px-1 flex-shrink-0' style={{ minHeight: '50px', overflow: 'hidden' }}>
                        <Button onClick={toggleDrawer(true)} sx={{ color: 'rgb(0, 0, 0)' }}>
                            <MenuIcon />
                        </Button>
                        {props.toplabel}
                        <div style={{ opacity: '0' }}>ignore</div>
                    </Box>
                    <Drawer
                        anchor='left'
                        open={drawer}
                        onClose={toggleDrawer(false)}
                    >
                        <div className='h3 m-4'>
                            {props.sideoptions}
                        </div>
                    </Drawer>
                    <div className='flex-grow-1' style={{ overflowY: 'scroll' }}>
                        {props.children}
                    </div>
                </div>
            </Mobile>
        </>
    );
}
export default MainDash;