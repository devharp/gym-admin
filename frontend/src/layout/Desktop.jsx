import { Box } from '@mui/material'

function Desktop(props){



    return(
    <>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block',  } }}>
            {props.children}
        </Box>
    </>);
}

export default Desktop;