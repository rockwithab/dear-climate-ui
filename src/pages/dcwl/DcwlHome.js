// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlHome = () => (
    <MainCard>
        <MainCard title="Welcome to Dear Climate, With Love!">
            <Typography variant="body1">
                {/* Looking to make a positive climate impact in your community? Dear Climate, With Love (DCWL) is a resource that provides
                letter templates and guidance for contacting your local/state representatives, your favorite consumer brands, etc. and call
                them to action! Many people find it hard to know how they can affect change when it comes to reducing their carbon
                footprint, let alone how they can influence entire communities or consumer products and supply changes. The answer combines
                the power of your voice, and the power of your dollar. */}
                Looking to make a positive climate impact in your community? Dear Climate, With Love (DCWL) is the place to be!
            </Typography>
        </MainCard>
        <MainCard>
            <Typography variant="body1">
                Dear Climate, With Love is a shortcut to a whole host of climate resources. For now it's <b>Climate Career Resources</b> and
                a quick link to learn more about and download <b>Climate Action Now!</b>
            </Typography>
        </MainCard>
    </MainCard>
);

export default DcwlHome;
