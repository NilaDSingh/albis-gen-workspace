import React, { useState } from 'react';
import "./App.css"
import SideNavigation from "../SideNavigation/SideNavigation"
import Homepage from "../Homepage/Homepage"
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LinearProgress from '@mui/material/LinearProgress';

export default function App(){
    const [progress, setProgress] = useState(30)
    const [tab, setTab] = useState(0)
    const iconStyle={
        color:'#a887e5'
    }
    const updateTab = (value) =>{
        setTab(value)
    }
    console.log(tab)

    return(
        <div className="app-container">
            <div className='navbar'><SideNavigation onUpdateTab={updateTab}/></div>
            <div className="page-container">
                <div className="header-container">
                    <div className="header-title">
                        <div><HomeFilledIcon sx={iconStyle}/></div>
                        <div>Workspace</div>
                    </div>
                    <div className="automation-container">
                        <div>
                        <div className="auto-progress-header">Complete Automation Process</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar">
                                <LinearProgress 
                                variant="determinate" 
                                value={progress}
                                sx={{
                                    '& .MuiLinearProgress-colorPrimary': {
                                    backgroundColor: '#313131', // Background color of the track
                                    },
                                    '& .MuiLinearProgress-barColorPrimary': {
                                    backgroundColor: '#91ffbf', // Color of the progress indicator
                                    },
                                }}/>
                            </div>
                            <div>{progress}%</div>
                        </div>
                        </div>
                    </div>
                </div>
                {tab === 0 ? <div className = "homepage"><Homepage/></div> : <></>}
            </div>
        </div>
    )
}