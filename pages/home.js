import React from 'react'
import Image from 'next/image';
import HeaderLink from '../components/headerlink/HeaderLink';

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from '@mui/material';
import AppOutlinedIcon from '@mui/icons-material/AppsOutlined'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import OndemandVideoSharp from '@mui/icons-material/OndemandVideoSharp';
import Head from 'next/head';

function home() {
  return (
    <div className="space-y-10 relative">
 <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
              <header className="flex justify-around items-center py-4">
      <div className="relative w-36 h-24">
        <Image src={'/assets/images/logo/logosociete.png'} width="100%" height="100%" objectFit="contain" layout="fill"/>
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
        
        <div className="pl-4">
             
<button class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#4959a6]  opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-black-700 font-semibold transition-colors duration-200 ease-in-out group-hover:text-white">Sign in</span>
    <span class="absolute inset-0 border-2 border-[#4959a6] rounded-full"></span>
    
</button>


        </div>


        
      </div>
    </header>
    
    <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
      <div className="space-y-6 xl:space-y-10">
        <h1 className="text-3xl md:text-5xl text-[#12181b] fontme
        max-w-xl !leading-snug pl-4 xl:pl-0 font-bold ">
          Build Our New World By <mark className="rounded-xl p-1" style={{backgroundColor:'#37A987'}}>Sharing</mark>
        </h1>

        <div className="space-y-4">
          <div className="intent">
            <h2 className="text-xl">Search PIDEV ressources</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"/>
          </div>

          <div className="intent">
            <h2 className='text-xl'>Find a person to help me</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"/>
        </div>

        <div className="intent">
            <h2 className="text-xl">Learn a new skill</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"/>
     



      </div>
      
      <div className="intent">
          <h2 className="text-xl">Build our community</h2>
          <ArrowForwardIosRoundedIcon/>

        </div>
      
      </div> </div>
      <div className="relative xl:absolute w-80 h-80 xl:w-[610px] xl:h-[610px] top-14 right-10 p-4">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />


        </div>
    




      
    </main>

    
    </div>
  
  )
}

export default home