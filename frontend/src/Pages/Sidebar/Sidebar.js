import React, { useState } from 'react';
import './Sidebar.css';
import CustomLink from './CustomLink'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TagIcon from '@mui/icons-material/Tag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DoneIcon from '@mui/icons-material/Done'
import { Avatar, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import UserLoggedInUser from '../../hooks/UserLoggedInUser';

const Sidebar = ({ handleLogout, user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loggedInUser] = UserLoggedInUser();

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"


    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = e => {
        setAnchorEl(null);
    }

    const result = user[0]?.email?.split('@')[0];
    return (
        <div className='sidebar'>
            <TwitterIcon className='Sidebar_twitterIcon' />
            <CustomLink to='/home/feeds'>
                <SidebarOptions active Icon={HomeIcon} text='Home' />
            </CustomLink>
            <CustomLink to='/home/explore'>
                <SidebarOptions active Icon={TagIcon} text='Explore' />
            </CustomLink>
            <CustomLink to='/home/notifications'>
                <SidebarOptions active Icon={NotificationsIcon} text='Notifications' />
            </CustomLink>
            <CustomLink to='/home/messages'>
                <SidebarOptions active Icon={MailOutlineIcon} text='Messages' />
            </CustomLink>
            <CustomLink to='/home/bookmarks'>
                <SidebarOptions active Icon={BookmarkBorderIcon} text='BookMarks' />
            </CustomLink>
            <CustomLink to='/home/lists'>
                <SidebarOptions active Icon={ListAltIcon} text='Lists' />
            </CustomLink>
            <CustomLink to='/home/profile'>
                <SidebarOptions active Icon={PermIdentityIcon} text='Profile' />
            </CustomLink>
            <CustomLink to='/home/more'>
                <SidebarOptions active Icon={MoreHorizIcon} text='More' />
            </CustomLink>
            <Button
                variant='outlined'
                className='sidebar_tweet'
            >Tweet</Button>
            <div className='profile_info'>
                <Avatar src={userProfilePic} />
                <div className='user_info'>
                    <h4>
                        {
                            loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName

                        }
                    </h4>
                    <h5>@{result}</h5>
                </div>
                <IconButton
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={openMenu ? "basic-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose} >
                    <MenuItem className='Profile_info1'>
                        <Avatar src={userProfilePic} />
                        <div className='user_info subUser_info'>
                            <div>    <h4>
                                {
                                    loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName

                                }
                            </h4>
                                <h5>@{result}</h5>
                            </div>
                            <ListItemIcon className='done_icon'><DoneIcon /> </ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Add an exisiting account</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out @dddeepak</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;

