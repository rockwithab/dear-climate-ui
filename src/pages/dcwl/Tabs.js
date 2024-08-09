import React from 'react';
import { Tabs as MuiTabs, Tab } from '@mui/material';

function Tabs({ tabs, activeTab, setActiveTab }) {
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <MuiTabs value={activeTab} onChange={handleChange} variant="scrollable" scrollButtons="auto">
            {tabs.map((tab) => (
                <Tab key={tab} label={tab} value={tab} />
            ))}
        </MuiTabs>
    );
}

export default Tabs;
