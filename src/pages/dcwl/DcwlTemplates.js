import { useState } from 'react';

//react-pdf
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

// material-ui
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DownloadOutlined } from '@ant-design/icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlTemplates = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const LEAF_BLOWER_TEMPLATE_LINK = 'https://dcwl-templates-public.s3.us-east-2.amazonaws.com/Leaf-Blower-Template.pdf';

    const SPRINKLER_TEMPLATE_LINK = 'https://dcwl-templates-public.s3.us-east-2.amazonaws.com/Sprinkler-And-Lawn-Management-Template.pdf';

    const COMMUNITY_GREEN_SPACE_TEMPLATE_LINK =
        'https://dcwl-templates-public.s3.us-east-2.amazonaws.com/Community-Green-Space-Template.pdf';

    const SUSTAINABLE_PACKAGING_TEMPLATE_LINK =
        'https://dcwl-templates-public.s3.us-east-2.amazonaws.com/Sustainable-Packaging-Template.pdf';

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
                        <AccordionHeader>
                            <AccordionHeaderTypography>Leaf Blower Template</AccordionHeaderTypography>
                            <AccordionHeaderButton
                                component={Link}
                                href={LEAF_BLOWER_TEMPLATE_LINK}
                                target="_blank"
                                disableRipple
                                color="secondary"
                                title="Leaf Blower Template"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                            >
                                <DownloadOutlined />
                            </AccordionHeaderButton>
                        </AccordionHeader>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Document file={LEAF_BLOWER_TEMPLATE_LINK}>
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                        <AccordionHeader>
                            <AccordionHeaderTypography>Sprinkler And Lawn-Management Template</AccordionHeaderTypography>
                            <AccordionHeaderButton
                                component={Link}
                                href={SPRINKLER_TEMPLATE_LINK}
                                target="_blank"
                                disableRipple
                                color="secondary"
                                title="Sprinkler And Lawn-Management Template"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                            >
                                <DownloadOutlined />
                            </AccordionHeaderButton>
                        </AccordionHeader>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Document file={SPRINKLER_TEMPLATE_LINK}>
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                        <AccordionHeader>
                            <AccordionHeaderTypography>Community Green Space Template</AccordionHeaderTypography>
                            <AccordionHeaderButton
                                component={Link}
                                href={COMMUNITY_GREEN_SPACE_TEMPLATE_LINK}
                                target="_blank"
                                disableRipple
                                color="secondary"
                                title="Community Green Space Template"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                            >
                                <DownloadOutlined />
                            </AccordionHeaderButton>
                        </AccordionHeader>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Document file={COMMUNITY_GREEN_SPACE_TEMPLATE_LINK}>
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
            <MainCard>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                        <AccordionHeader>
                            <AccordionHeaderTypography>Sustainable Packaging Template</AccordionHeaderTypography>
                            <AccordionHeaderButton
                                component={Link}
                                href={SUSTAINABLE_PACKAGING_TEMPLATE_LINK}
                                target="_blank"
                                disableRipple
                                color="secondary"
                                title="Sustainable Packaging Template"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                            >
                                <DownloadOutlined />
                            </AccordionHeaderButton>
                        </AccordionHeader>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Document file={SUSTAINABLE_PACKAGING_TEMPLATE_LINK}>
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
        </MainCard>
    );
};

const AccordionHeader = styled('div')(() => ({
    display: 'flex'
}));

const AccordionHeaderTypography = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center'
}));

const AccordionHeaderButton = styled(IconButton)(() => ({
    display: 'flex',
    marginLeft: '1em'
}));

export default DcwlTemplates;
