import React from 'react'
import Image from 'next/image';
import HeaderLink from '../components/headerlink/HeaderLink';

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from '@mui/material';
import AppOutlinedIcon from '@mui/icons-material/AppsOutlined'

function home() {
  return (
    <header className="flex justify-around items-center py-4">
      <div className="relative w-36 h-10">
        <Image src={'/assets/images/logo/logosociete.png'} objectFit="contain" layout="fill"/>
      </div>

      <div className="flex items-center sm:divide-x divide-gray-300">
        <div className="hidden sm:flex space-x-8 pr-4">
          <HeaderLink Icon={HomeRoundedIcon} text="Home"/>
          <HeaderLink Icon={GroupIcon} text="Group"/>
          <HeaderLink Icon={BusinessCenterIcon} text="Business"/>
          <HeaderLink Icon={ChatIcon} text="Messaging"/>
          <HeaderLink Icon={NotificationsIcon} text="Notifications"/>
          {/* <HeaderLink Icon={Avatar} text="Me"/>
          <HeaderLink Icon={AppOutlinedIcon} text="Work"/> */}
          

    
        </div>
        
      </div>
    </header>
  )
}

export default home