import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - lee pages
const Lee = Loadable(lazy(() => import('pages/Lee')));

// ==============================|| MAIN ROUTING ||============================== //

const LeeRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '568427913',
            element: <Lee />
        }
    ]
};

export default LeeRoutes;
