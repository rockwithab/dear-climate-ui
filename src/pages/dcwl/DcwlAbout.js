// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlAbout = () => (
    <MainCard>
        <MainCard title="DCWL About">
            <Typography variant="body1">
                Our mission is to empower individuals to effectively communicate their concerns and ideas for addressing climate change by
                providing accessible, well-crafted, and impactful letter templates. We aim to foster a culutre of active participation in
                environmental conversations and advocate for sustainable practices by making it easier for people to engage with companies
                and local communities. Through collaboration and awareness, we strive to transform the way we approach climate change, one
                letter at a time.
            </Typography>
            <Typography variant="body2">
                Dear Climate, With Love is a passion project brought to you by{' '}
                <a href="https://github.com/rockwithab/dear_climate_with_love">@rockwithab</a>
            </Typography>
        </MainCard>
    </MainCard>
);

export default DcwlAbout;
