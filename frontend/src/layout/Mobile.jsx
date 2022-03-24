import { Box } from '@mui/material'
function Mobile(props){



    return(
    <>
        <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none',  } }}>
            {props.children}
        </Box>
    </>);
}

export default Mobile;