import { Typography } from "@mui/material";
import Desktop from "../layout/Desktop";
import Mobile from "../layout/Mobile";

function PageHeading(props) {
    return (
        <>
            <Desktop>
                <div className='d-flex justify-content-center align-items-end' style={{ height: '12rem', width: '100%' }}>
                    <Typography fontWeight={800} fontSize={'2.5rem'}>
                        {props.children}
                    </Typography>
                </div>
            </Desktop>
            <Mobile>
                <div className='d-flex justify-content-center align-items-end' style={{ height: '12rem', width: '100%' }}>
                    <Typography fontWeight={800} fontSize={'1.8rem'}>
                        {props.children}
                    </Typography>
                </div>
            </Mobile>
        </>);
}

export default PageHeading;