import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PagesIcon from '@mui/icons-material/Pages';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state';

import './Sidebar.css'

function Sidebar() {
    const dispatch = useDispatch();
    const style = {
        height: '100%',
        width: '30%',
        minWidth: '250px',
        maxWidth: '400px',
        backgroundColor: '#121828',
        color: 'white',
    }
    const desktop_sx = {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
        }
    };

    const mobile_sx = {
        display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none'
        }
    };
    return (
        <>
            <Box sx={{...desktop_sx, height: '100%'}}>

                <div className='d-flex' style={{ zIndex: '1', height: '100%' }}>
                    <div className="p-5" style={style}>
                        <div>
                            <div className='sidebar-item sidebar-item-active'><DashboardCustomizeIcon />&nbsp;Dashboard</div>
                            <div className='sidebar-item sidebar-item-inactive'><PagesIcon />&nbsp;Pages</div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box sx={mobile_sx}>

                <div className='d-flex full-hw' style={{ zIndex: '1' }}>
                    <div className="p-5" style={style}>
                        <div>
                            <div className='sidebar-item sidebar-item-active'><DashboardCustomizeIcon />&nbsp;Dashboard</div>
                            <div className='sidebar-item sidebar-item-inactive'><PagesIcon />&nbsp;Pages</div>
                        </div>
                    </div>
                    <div className='flex-grow-1' onClick={() => { dispatch(actionCreators.setSideBar(false)) }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                </div>
            </Box>
        </>
    );
}

export default Sidebar;