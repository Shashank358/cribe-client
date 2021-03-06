import React, {useState} from 'react';
import './HomeNav.css'
import Brand from '../../../assets/images/brand.jpg';
import NotiIcon from '../../../assets/images/notification.png';
import { useHistory } from 'react-router-dom';

import CreateIcon from '../../../assets/images/create_icon.png';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../../../hoc/popover/profile/Profile';
import Notification from '../../../hoc/popover/notification/Notification';
import Search from '../../../hoc/popover/search/Search';
import {OverlayTrigger} from 'react-bootstrap';

const HomeNav = (props) => {
    const history = useHistory();
    const profilePop = Profile({
        onLogout: props.onLogout, 
        profile: props.profile, 
        selectHashtag: props.openHashtagPage,
        communityClicked: props.communityClicked
        });
    const [search, setSearch] = useState('');

    const notificationPop = Notification();
    const searchPop = Search(search);

    const goToHome = () => {
        history.push('/cribe-client');
    }   
    const createBlog = () => {
        history.push('/cribe-client/create')
    }

    const searchInputChange = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    const goToSearch = () => {
        history.push('/cribe-client/search')
    }

    return(
        <div className="HomeNav">
            <div className="NavContext">
                <img src={Brand} onClick={goToHome} alt="brand logo"></img>
                <div id="myDropdown" className="ItemsContainer">
                    <img src={CreateIcon} onClick={createBlog} className="CreateBlogImg" alt="create blog"></img>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomnotification'
                        placement='bottom'
                        overlay={notificationPop}
                        >
                        <img src={NotiIcon} alt="notification icon" className="NotiIcon"></img>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomprofile'
                        placement='bottom'
                        overlay={profilePop}
                        >
                        <Avatar className="Profile">S</Avatar>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="focus"
                        key='bottomsearch'
                        placement='bottom'
                        overlay={searchPop}
                        >
                        <input onChange={searchInputChange} className="SearchBox" placeholder='Search people, community, hashtag'></input>
                    </OverlayTrigger>
                </div>
                <div id="myDropdown" className="ItemsContainerMobile">
                    <SearchIcon onClick={goToSearch} className="SearchIcon" color="action"/>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomnotification'
                        placement='bottom'
                        overlay={notificationPop}
                        >
                        <img src={NotiIcon} alt="notification icon" className="NotiIcon"></img>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger="click"
                        key='bottomprofile'
                        placement='bottom'
                        overlay={profilePop}
                        >
                        <Avatar className="Profile">S</Avatar>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;