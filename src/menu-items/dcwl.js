// assets
import { HomeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    HomeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const dcwl = {
    id: 'dcwl',
    title: 'DCWL',
    type: 'group',
    children: [
        {
            id: 'dcwl-home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.HomeOutlined
        },
        {
            id: 'dcwl-templates',
            title: 'Templates',
            type: 'item',
            url: '/templates',
            icon: icons.QuestionOutlined
        },
        {
            id: 'dcwl-about',
            title: 'About',
            type: 'item',
            url: '/about',
            icon: icons.QuestionOutlined
        }
    ]
};

export default dcwl;
