// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

//images
import map from '../assets/images/lee/da-map.jpg';
import place1 from '../assets/images/lee/20230729_110605.jpg';
import place2 from '../assets/images/lee/20230729_110401.jpg';
import place3 from '../assets/images/lee/20230729_110346.jpg';

// ==============================|| SAMPLE PAGE ||============================== //

const Lee = () => (
    <MainCard>
        <MainCard title="Lee">
            <Typography variant="body1">You know where this is...</Typography>
        </MainCard>
        <div>
            <img src={map} alt="map" />
        </div>
        <div>
            <img src={place1} alt="place1" />
        </div>
        <div>
            <img src={place2} alt="place2" />
        </div>
        <div>
            <img src={place3} alt="place3" />
        </div>
    </MainCard>
);

export default Lee;
