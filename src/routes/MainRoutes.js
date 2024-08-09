import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - dcwl pages
const DcwlHome = Loadable(lazy(() => import('pages/dcwl/DcwlHome')));
const DcwlTemplates = Loadable(lazy(() => import('pages/dcwl/DcwlTemplates')));
const DcwlAbout = Loadable(lazy(() => import('pages/dcwl/DcwlAbout')));
const DcwlResources = Loadable(lazy(() => import('pages/dcwl/DcwlResources')));
const DcwlCan = Loadable(lazy(() => import('pages/dcwl/DcwlCan')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DcwlHome />
        },
        {
            path: 'home',
            element: <DcwlHome />
        },
        {
            path: 'templates',
            element: <DcwlTemplates />
        },
        {
            path: 'about',
            element: <DcwlAbout />
        },
        {
            path: 'can',
            element: <DcwlCan />
        },
        {
            path: 'resources',
            element: <DcwlResources />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
