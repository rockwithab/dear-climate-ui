// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlAbout = () => (
    <MainCard>
        <MainCard title="DCWL About">
            <Typography variant="body1" sx={{ paddingBottom: 5 }}>
                My mission is to empower individuals to effectively communicate their concerns and ideas for addressing climate change by
                providing resources and guidance wherever you are in your climate journey.
            </Typography>
            <Typography variant="body2">
                Dear Climate, With Love is a passion project brought to you by{' '}
                <a href="https://github.com/rockwithab/dear_climate_with_love">@rockwithab</a>
            </Typography>
        </MainCard>
    </MainCard>
);

export default DcwlAbout;
