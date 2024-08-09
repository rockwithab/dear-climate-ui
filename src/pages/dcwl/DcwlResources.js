import { useState } from 'react';

//react-pdf
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

// material-ui
// import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Link } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { Card, CardContent, Typography, Link } from '@mui/material';
import Tabs from './Tabs';
import { styled } from '@mui/material/styles';
import { DownloadOutlined } from '@ant-design/icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import data from './climate-resources.json';

// project import
import MainCard from 'components/MainCard';
import { DCWL_TEMPLATES } from 'templates/DcwlTemplateLinks.js';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlResources = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(data.sections)[0]);
    // const [expanded, setExpanded] = useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    // let templateCards = [];
    // for (var i = 0; i < DCWL_TEMPLATES.length; i++) {
    //     templateCards.push(
    //         <MainCard>
    //         </MainCard>
    //     );
    // }
    return (
        // <MainCard>
        //     <MainCard title="DCWL Templates">
        //         <Typography variant="body1">
        //             These templates can be used as a starting point for contacting your community or favorite consumer brands.
        //         </Typography>
        //         {/* <Typography variant="body2">
        //             How to use these templates:
        //         </Typography> */}
        //     </MainCard>
        //     {templateCards}
        // </MainCard>
        <MainCard>
            <Typography variant="h4" gutterBottom>
                {data.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Curated by {data.curator}
            </Typography>
            <Tabs tabs={Object.keys(data.sections)} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {Object.entries(data.sections[activeTab]).map(([title, link], index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        {/* <Tile title={title} link={link} /> */}
                        <Card variant="outlined" sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                            <CardContent>
                                <Typography variant="h6" component="a" href={link} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </MainCard>
    );
};

// const AccordionHeader = styled(AccordionSummary)`
//     display: flex;

//     & .MuiAccordionSummary-content {
//         justify-content: space-between;
//         margin-right: 1em;
//     }
// `;

// const AccordionHeaderTypography = styled(Typography)(() => ({
//     display: 'flex',
//     alignItems: 'center'
// }));

// const AccordionHeaderButton = styled(IconButton)(() => ({
//     display: 'flex',
//     marginLeft: '1em'
// }));

export default DcwlResources;
