
import Desktop from '../../layout/Desktop';
import Mobile from '../../layout/Mobile'
import Navbar from '../../components/Navbar'
import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';

function Home() {

    const [webpages, setWebPages] = useState([{ name: 'No Pages Found' }]);
    const [pageeditkey, setPageEditKey] = useState(0);
    const [contentpageeditor, setContentPageEditor] = useState('');

    const [panel, setPanel] = useState(0);


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
                <Box className={props.className}>
                    <Typography className='mb-3' variant='h6' fontWeight='fontWeightMedium' >Pages</Typography>
                    <Divider />
                    <List>
                        {webpages.map((e, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemButton onClick={() => {
                                        setPageEditKey(pageeditkey => pageeditkey + 1);
                                        setContentPageEditor(e.content);
                                        setPanel(1);
                                    }} >
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

        const [webpageblocks, setWebpageBlocks] = useState([]);


        useEffect(() => {
            console.log('Page editor component loaded');
            if (props.content.length > 0) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:3001' + props.content);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const payload = JSON.parse(xhr.responseText);
                        console.log(payload);
                        setWebpageBlocks(payload.blocks);
                    }
                }
                xhr.send();

            }

        }, []);

        function onBlockChange(e, i, type) {
            let tempblocks = webpageblocks;
            switch (type) {
                case 'heading':
                    tempblocks[i].heading = e.target.value;
                    break;
                case 'paragraph':
                    tempblocks[i].paragraph = e.target.value;
                    break;
                default:
                    break;
            }
            console.log(tempblocks);
            setWebpageBlocks(tempblocks);

        }

        function handleSaveClick() {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3001/setcontent?name=HOME');
            let temp = {blocks: webpageblocks};
            xhr.send(JSON.stringify(temp));
        }


        return (
            <>
                <div className={props.className}>
                    <Button variant='outlined' onClick={() => {
                        setPanel(0);
                    }}>Back</Button>

                    {
                        webpageblocks.map((e, i) => {
                            return (
                                <Box className='my-3' key={i}>
                                    <Paper className='p-3 mb-5' elevation={2}>
                                        <Typography className='mb-5' variant='h6'>Block {i + 1}</Typography>
                                        <div className='d-flex flex-column'>
                                            <TextField onChange={(e) => onBlockChange(e, i, 'heading')} className='mb-5' size='small' label='heading' defaultValue={e.heading} />
                                            <TextField onChange={(e) => onBlockChange(e, i, 'paragraph')} className='mb-5' size='small' label='paragraph' multiline minRows={7} defaultValue={e.paragraph} />
                                        </div>
                                    </Paper>
                                </Box>
                            );
                        }
                        )}

                    <Button onClick={handleSaveClick} className={`${(webpageblocks.length > 0) ? '' : 'd-none'}`} variant='contained' color='primary' >Save</Button>

                </div>
            </>
        );

    }

    return (
        <>
            <Navbar name='Dashboard' position='fixed' />
            <PageHeading>
                {values.heading}
            </PageHeading>

            <Box className='container mt-3'>
                <PageSelector className={`mb-3 ${(panel === 0) ? '' : 'd-none'}`} />
                <PageEditor className={`mb-3 ${(panel === 1) ? '' : 'd-none'}`} key={pageeditkey} content={contentpageeditor}>

                </PageEditor>

                <div className='my-4'>&nbsp;</div>
            </Box>
        </>
    );
}

export default Home;