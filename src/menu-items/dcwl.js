// assets
import { BookOutlined, HomeOutlined, FileTextOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    BookOutlined,
    HomeOutlined,
    FileTextOutlined,
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
        // {
        //     id: 'dcwl-templates',
        //     title: 'Templates',
        //     type: 'item',
        //     url: '/templates',
        //     icon: icons.FileTextOutlined
        // },
        {
            id: 'dcwl-resources',
            title: 'Climate Career Resources',
            type: 'item',
            url: '/resources',
            icon: icons.BookOutlined
        },
        {
            id: 'dcwl-can',
            title: 'Climate Action Now',
            type: 'item',
            url: '/can',
            icon: icons.BookOutlined
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
