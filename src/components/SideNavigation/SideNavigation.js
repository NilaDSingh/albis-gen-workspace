import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import "./SideNavigation.css"
import logo from "../Images/logo.png"
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import Homepage from '../Homepage/Homepage';
import mockUser from "../Images/mockUser.jpg"
export default function SideNavigation({onUpdateTab}){
    const [open, setOpen] = React.useState(true)
    const drawerStyle={
        backgroundColor:"#131521",
        borderColor:"#272e4b"
    }

    const iconStyle={
        color:"#828282",
        fontSize:"large" 
    }

    const handleClick = (value) => {
        onUpdateTab(value)
    }

    return(
        <div>
            <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
                sx: drawerStyle
            }}
            anchor='left'
            >   
            <div className="logo-container"><img className="logo" src={logo}></img></div>
            <div className='icon-container'>
                <div className="icons">
                    <IconButton onClick={() => handleClick(0)}><HomeOutlinedIcon sx={iconStyle}/></IconButton>
                    <IconButton onClick={() => handleClick(1)}><DashboardCustomizeOutlinedIcon sx={iconStyle}/></IconButton>
                    <IconButton onClick={() => handleClick(2)}><PowerOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton onClick={() => handleClick(3)}><AutoAwesomeOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton onClick={() => handleClick(4)}><PersonOutlineOutlinedIcon sx={iconStyle}/></IconButton> 
                </div>
                    <Divider sx={{backgroundColor:"#272e4b", marginTop:"25vh", marginBottom:'2vh'}}></Divider>
                <div className="icons">
                    <IconButton onClick={() => handleClick(5)}><SettingsOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton onClick={() => handleClick(6)}><LiveHelpOutlinedIcon sx={iconStyle}/></IconButton> 
                    <div><img className="logo" src={mockUser}></img></div>
                </div>
            </div>
            </Drawer>
        </div>
    )
}