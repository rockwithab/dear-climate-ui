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
import { DCWL_TEMPLATES } from 'templates/DcwlTemplateLinks.js';

// ==============================|| SAMPLE PAGE ||============================== //

const DcwlTemplates = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let templateCards = [];
    for (var i = 0; i < DCWL_TEMPLATES.length; i++) {
        templateCards.push(
            <MainCard>
                <Accordion expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                    <AccordionHeader
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${i + 1}bh-content`}
                        id={`panel${i + 1}bh-header`}
                    >
                        <AccordionHeaderTypography>{DCWL_TEMPLATES[i].title}</AccordionHeaderTypography>
                        <AccordionHeaderButton
                            component={Link}
                            href={DCWL_TEMPLATES[i].doc}
                            target="_blank"
                            disableRipple
                            color="secondary"
                            title={DCWL_TEMPLATES[i].title}
                            sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                        >
                            <DownloadOutlined />
                        </AccordionHeaderButton>
                    </AccordionHeader>
                    <AccordionDetails>
                        <Document file={DCWL_TEMPLATES[i].pdf}>
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>
                    </AccordionDetails>
                </Accordion>
            </MainCard>
        );
    }
    return (
        <MainCard>
            <MainCard title="DCWL Templates">
                <Typography variant="body1">
                    These templates can be used as a starting point for contacting your community or favorite consumer brands.
                </Typography>
                {/* <Typography variant="body2">
                    How to use these templates:
                </Typography> */}
            </MainCard>
            {templateCards}
        </MainCard>
    );
};

const AccordionHeader = styled(AccordionSummary)`
    display: flex;

    & .MuiAccordionSummary-content {
        justify-content: space-between;
        margin-right: 1em;
    }
`;

const AccordionHeaderTypography = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center'
}));

const AccordionHeaderButton = styled(IconButton)(() => ({
    display: 'flex',
    marginLeft: '1em'
}));

export default DcwlTemplates;
