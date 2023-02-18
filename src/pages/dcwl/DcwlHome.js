// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlHome = () => (
    <MainCard>
        <MainCard title="Welcome to Dear Climate, With Love!">
            <Typography variant="body1">
                Looking to make a positive climate impact in your community? Dear Climate, With Love (DCWL) is a resource that provides
                letter templates and guidance for contacting your local/state representatives, your favorite consumer brands, etc. and call
                them to action! Many people find it hard to know how they can affect change when it comes to reducing their carbon
                footprint, let alone how they can influence entire communities or consumer products and supply changes. The answer combines
                the power of your voice, and the power of your dollar.
            </Typography>
        </MainCard>
        <MainCard title="How to use DCWL">
            <Typography variant="body1">
                Dear Climate, With Love has a number of templates that you can download, or take inspiration from, modify to your hearts
                content, and send to your local representatives or favorite consumer brands.
            </Typography>
            {/* <Typography variant="body2">
                There are three simple steps that can make a huge difference in your community and for the planet:
            </Typography> */}
        </MainCard>
    </MainCard>
);

export default DcwlHome;
