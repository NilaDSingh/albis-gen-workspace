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

export default function SideNavigation(){
    const [open, setOpen] = React.useState(true)

    const drawerStyle={
        backgroundColor:"#131521",
        borderColor:"#272e4b"
    }

    const iconStyle={
        color:"#828282",
        fontSize:"large" 
    }
    return(
        <div>
            <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
                sx: drawerStyle
            }}
            >   
            <div className="logo-container"><img className="logo" src={logo}></img></div>
            <div className='icon-container'>
                <div className="icons">
                    <IconButton><HomeOutlinedIcon sx={iconStyle}/></IconButton>
                    <IconButton><DashboardCustomizeOutlinedIcon sx={iconStyle}/></IconButton>
                    <IconButton><PowerOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton><AutoAwesomeOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton><PersonOutlineOutlinedIcon sx={iconStyle}/></IconButton> 
                </div>
                    <Divider sx={{backgroundColor:"#272e4b", marginTop:"25vh", marginBottom:'2vh'}}></Divider>
                <div className="icons">
                    <IconButton><SettingsOutlinedIcon sx={iconStyle}/></IconButton> 
                    <IconButton><LiveHelpOutlinedIcon sx={iconStyle}/></IconButton> 
                    {/* replace with user icon */}<IconButton><LiveHelpOutlinedIcon sx={iconStyle}/></IconButton> 

                </div>
            </div>
            </Drawer>
            bye
        </div>
    )
}