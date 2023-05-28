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
        <MainCard title="How to use DCWL Templates: A Step-by-Step Guide">
            <Typography variant="body1">
                Dear Climate, With Love has a number of templates that you can copy, download, take inspiration from, modify to your hearts
                content, and send to your local representatives or favorite consumer brands!
                <ol>
                    <li>
                        <b>Choose a letter template:</b>
                        <br /> Browse our extensive collection of climate change letter templates, designed to address various environmental
                        concerns and target different audiences, such as companies, local communities, and government representatives.
                        Select the template that best fits your purpose and resonates with you.
                    </li>
                    <li>
                        <b>Customize the template:</b>
                        <br /> Personalize the letter by adding specific details, such as the recipient's name, your name, and any relevant
                        data or examples. This will make your letter more engaging and relatable, showing the recipient that you've done
                        your research and are genuinely concerned about the issue at hand.
                    </li>
                    <li>
                        <b>Copy, download or hand-write the letter:</b>
                        <br /> Once you've customized the letter to your liking, you have three options for sending it out:
                        <ol type="a">
                            <li>
                                <b>Copy and paste:</b> Simply copy the text from the template and paste it into an email or a word
                                processing document, such as Microsoft Word or Google Docs. Format the letter according to your preference
                                and save it for sending or printing.
                            </li>
                            <li>
                                <b>Download:</b> Our templates offer a download option, allowing you to save the letter as a text document.
                                This makes it easy to print, attach to an email, or upload to a recipient's online submission portal.
                            </li>
                            <li>
                                <b>Hand-write:</b> For a more personal touch, consider hand-writing the letter using the template as a
                                guide. This can be especially impactful when sending letters to local community leaders or businesses, as a
                                hand-written letter demonstrates a strong personal investment in the issue.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <b>Send your letter:</b>
                        <br /> Now that your letter is ready, it's time to send it to the intended recipient. You can either mail the
                        printed or hand-written letter, attach a digital copy to an email, or submit it through an online portal if the
                        recipient has one available. Don't forget to include your contact information, so they can respond to your concerns.
                    </li>
                    <li>
                        <b>Follow up:</b>
                        <br /> After sending your letter, it's essential to follow up with the recipient after a reasonable period, usually
                        2-3 weeks. This shows your commitment to the cause and may prompt a response if they haven't already replied.
                    </li>
                </ol>
                By using DCWL templates, you're taking an essential step in advocating for a greener, more sustainable future. Remember,
                every letter counts, and together, we can make a difference!
            </Typography>
            {/* <Typography variant="body2">
                There are three simple steps that can make a huge difference in your community and for the planet:
            </Typography> */}
        </MainCard>
    </MainCard>
);

export default DcwlHome;
