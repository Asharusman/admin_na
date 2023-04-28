import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import VerticalTabs from './tab';
import setting from '../../images/settings.png'
const Settings = () => {
    return (
        <div>
            <div className='head'>
                {/* <ListItemIcon> */}
                    <img src={setting} alt="" />
                    {/* <SettingsIcon/> */}
                {/* </ListItemIcon> */}
                <h2>Settings</h2>
                
            </div>
            <div className="header">
        <h4>Companyinformation</h4>
    </div>
            <VerticalTabs />
        </div>
    )
}

export default Settings