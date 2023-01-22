// project import
import pages from './pages';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';
import dcwl from './dcwl';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: process.env.NODE_ENV === 'development' ? [dcwl, dashboard, pages, utilities, support] : [dcwl]
};

export default menuItems;
