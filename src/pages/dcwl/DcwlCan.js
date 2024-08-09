// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlCan = () => (
    <MainCard>
        <MainCard>
            <Typography variant="h6" component="a" href={'https://www.climateactionnow.com/'} target="_blank" rel="noopener noreferrer">
                Climate Action Now
            </Typography>
        </MainCard>
        <MainCard>
            {/* <Typography>
                Climate Action Now
            </Typography> */}
        </MainCard>
    </MainCard>
);

export default DcwlCan;
