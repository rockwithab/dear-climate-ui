// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlAbout = () => (
    <MainCard>
        <MainCard title="DCWL About">
            <Typography variant="body2">
                Dear Climate, With Love is a passion project brought to you by{' '}
                <a href="https://github.com/rockwithab/dear-climate-with-love">@rockwithab</a>
            </Typography>
        </MainCard>
    </MainCard>
);

export default DcwlAbout;
