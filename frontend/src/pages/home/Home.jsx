
import Desktop from '../../layout/Desktop';
import Mobile from '../../layout/Mobile'
import Navbar from '../../components/Navbar'
import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';

function Home() {

    const [webpages, setWebPages] = useState([{ name: 'No Pages Found' }]);
    const [pageeditkey, setPageEditKey] = useState(0);

    useEffect(() => {

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3001/metainfo');
        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const payload = JSON.parse(xhr.response);
                console.log(payload);
                setWebPages(payload);
            }
        }
        xhr.send('.all');


    }, [])


    const values = {
        heading: 'Welcome to the Admin\'s Panel'
    }

    function PageSelector(props) {
        return (
            <>
                <Box className={props.className} sx={{ maxWidth: '500px' }}>
                    <Typography className='mb-3' variant='h6' fontWeight='fontWeightMedium' >Pages</Typography>
                    <Divider />
                    <List>
                        {webpages.map((e, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemButton onClick={() => { setPageEditKey(pageeditkey => pageeditkey + 1) }} >
                                        <ListItemText primary={e.name} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </>
        );

    }

    function PageEditor(props) {

        useEffect(() => {
            console.log('Page editor component loaded');

        }, [])



        return (
            <>
                <div>
                    <Button variant='outlined' >Back</Button>

                </div>
            </>
        );

    }

    function Block() {

    }

    return (
        <>
            <Navbar name='Dashboard' position='fixed' />
            <PageHeading>
                {values.heading}
            </PageHeading>

            <Box className='container mt-3'>
                <PageSelector className='d-none' />
                <PageEditor key={pageeditkey}>

                </PageEditor>

            </Box>
        </>
    );
}

export default Home;