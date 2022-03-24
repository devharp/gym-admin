import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

import './Dashboard.css'

function Dashboard() {

    const sidebarstate = useSelector(state => state.sidebar);

    const desktop_sx = {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
        },
        height: '100%',
    };

    const mobile_sx = {
        display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none'
        },
        height: '100%',
    };

    return (
        <>

            <Box sx={desktop_sx}>
                <div className="d-flex full-hw">
                    <Sidebar />
                    <div className="d-flex flex-column flex-grow-1">
                        <Navbar position='static' />
                        <div className="flex-grow-1">Hello</div>
                    </div>
                </div>
            </Box>
            <Box sx={mobile_sx}>
                <div className='full-hw'>
                    <div className={`position-absolute  full-hw ${(sidebarstate) ? 'd-block' : 'd-none'}`}>
                        <Sidebar />
                    </div>
                    <div className="position-absolute d-flex flex-column w-100 " style={{ zIndex: ((sidebarstate) ? '-1' : '1'  ) }}>
                        <Navbar position='static' />
                        <div className="flex-grow-1">Hello</div>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Dashboard;