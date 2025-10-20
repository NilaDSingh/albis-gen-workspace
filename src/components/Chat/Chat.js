import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import mockIcon from '../Images/mockUser.jpg'
import CloseIcon from '@mui/icons-material/Close'; 
import MicNoneIcon from '@mui/icons-material/MicNone';
import "./Chat.css"
import { IconButton } from '@mui/material';
export default function Chat({onCloseChat, open}){
    const [chatHistory, setChatHistory] = useState()

    // replace with data
    const [user, setUser] = useState("John McCarthy") 

    const iconStyle={
        color:'white'

    }

    console.log(open)
    const modalStyle={
        background: 'radial-gradient(circle,rgba(28, 32, 54, 1) 100%, rgba(54, 65, 114, 1) 100%)',
        width:'20vw',
        height:'86vh',
        marginLeft:'79vw',
        marginTop:'10vh',
        borderRadius:"10px",
        border:'1px solid #272e4b'
    }
    return(  
        <div className='modal-container'>
            <Modal
            sx={modalStyle}
            open={open}
            hideBackdrop   
            disableEscapeKeyDown
            >
            <Box >
                <div className='title-container'>
                    <div className="chat-title">
                        <img className="conversation-icon" src={mockIcon}></img>
                        Conversation
                    </div>
                    <IconButton onClick={onCloseChat}><CloseIcon fontSize='small' sx={{color:"#828282"}}></CloseIcon></IconButton>
                </div>
                <Divider sx={{backgroundColor:"#828282"}}></Divider>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="message-container">
                        <div className="user">{user}</div>
                        <div className='message'>Show me the customer sentimental analysis</div>
                    </div>
                </Typography>
                <div className='mic-icon'>
                    <IconButton sx={{backgroundColor:'#242e4b'}}><MicNoneIcon sx={iconStyle}></MicNoneIcon></IconButton>
                </div>
            </Box>
            </Modal>
                    </div>
    )
}