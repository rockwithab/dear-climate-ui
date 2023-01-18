import * as React from 'react';

// material-ui
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlTemplates = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <MainCard>
            <MainCard title="DCWL Templates">
                <Typography variant="body2">
                    These templates can be used as a starting point for contacting your community or favorite consumer brands.
                </Typography>
                {/* <Typography variant="body2">
                    How to use these templates:  
                </Typography> */}
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography>Template 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Mauris sit amet massa
                            vitae. Varius duis at consectetur lorem donec massa sapien faucibus. Commodo nulla facilisi nullam vehicula
                            ipsum a arcu cursus. Libero volutpat sed cras ornare arcu dui vivamus arcu. Mi eget mauris pharetra et ultrices.
                            Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sodales neque sodales ut etiam.
                            Phasellus vestibulum lorem sed risus ultricies tristique. Dui ut ornare lectus sit amet est. Risus sed vulputate
                            odio ut enim blandit. Vel pretium lectus quam id.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                        <Typography>Template 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Mauris sit amet massa
                            vitae. Varius duis at consectetur lorem donec massa sapien faucibus. Commodo nulla facilisi nullam vehicula
                            ipsum a arcu cursus. Libero volutpat sed cras ornare arcu dui vivamus arcu. Mi eget mauris pharetra et ultrices.
                            Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sodales neque sodales ut etiam.
                            Phasellus vestibulum lorem sed risus ultricies tristique. Dui ut ornare lectus sit amet est. Risus sed vulputate
                            odio ut enim blandit. Vel pretium lectus quam id.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                        <Typography>Template 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Mauris sit amet massa
                            vitae. Varius duis at consectetur lorem donec massa sapien faucibus. Commodo nulla facilisi nullam vehicula
                            ipsum a arcu cursus. Libero volutpat sed cras ornare arcu dui vivamus arcu. Mi eget mauris pharetra et ultrices.
                            Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sodales neque sodales ut etiam.
                            Phasellus vestibulum lorem sed risus ultricies tristique. Dui ut ornare lectus sit amet est. Risus sed vulputate
                            odio ut enim blandit. Vel pretium lectus quam id.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
        </MainCard>
    );
};

export default DcwlTemplates;
