import { useState } from 'react';
import MainDash from '../../layout/maindash/MainDash';

import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ArticleIcon from '@mui/icons-material/Article';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import Pages from '../../layout/maindash/pages/Pages';
import Users from '../../layout/maindash/users/Users';
import Admin from '../../layout/maindash/admin/Admin';
import Managers from '../../layout/maindash/managers/Managers';
import Plans from '../../layout/maindash/plans/Plans';
import Statistics from '../../layout/maindash/statistics/Statistics';

import { Box, Typography } from '@mui/material';


function Home2() {

    const [panel, setPanel] = useState(0);

    const options = [
        { img: <ArticleIcon />, name: 'Pages' },
        { img: <GroupIcon />, name: 'Users' },
        { img: <PersonIcon />, name: 'Admin' },
        { img: <AssignmentIndIcon />, name: 'Managers' },
        { img: <InventoryIcon />, name: 'Plans' },
        { img: <AnalyticsIcon />, name: 'Statistics' }
    ]

    const optionpanels = [
        <Pages />,
        <Users />,
        <Admin />,
        <Managers />,
        <Plans />,
        <Statistics />
    ]

    function SideOptions() {
        return (
            <>
                <div className='d-flex mb-5'>
                    <div className='d-flex align-items-center'><DisplaySettingsIcon /> <Typography variant='h6' >&nbsp;Dashboard</Typography></div>
                </div>
                {options.map((e, i) => {
                    return (
                        <div key={i} onClick={() => { setPanel(i) }} className={`${(panel === i) ? 'active user-select-none' : 'hover user-select-none cursor-pointer'} d-flex align-items-center px-2 py-2 mb-3`}>{e.img} <Typography variant='subtitle2' >&nbsp;{e.name}</Typography></div>
                    );
                })
                }
            </>)
            ;
    }

    return (
        <>
            <MainDash toplabel='Dashboard' sideoptions={<SideOptions />} >
                <div>{optionpanels[panel]}</div>
            </MainDash>
        </>
    );
}
export default Home2;