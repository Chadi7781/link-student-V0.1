import React from 'react'
import Image from 'next/image';
import HeaderLink from '../components/headerlink/HeaderLink';

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppOutlinedIcon from '@mui/icons-material/AppsOutlined'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import OndemandVideoSharp from '@mui/icons-material/OndemandVideoSharp';
import Head from 'next/head';
import Footer from '../components/footer/footer';

function home() {
  return (
    <div className="space-y-7 relative">
 <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
              <header className="flex justify-around items-center py-4">
      <div className="relative w-36 h-24 ">
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
          <div className="intent ">
            <h2 className="text-xl">Search PIDEV ressources</h2><Image src={"/assets/images/esprit.jpg"} width={100} height={100}/>
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
      <div className="relative xl:flex  w-80 h-80 xl:w-[610px] xl:h-[610px] mx-6 py-35 p-10">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />


        </div>
    




      
    </main>
    <div className="bg-gray-100 overflow-y-hidden">
            <div className="mx-auto container py-12 px-4">
                <div className="w-full flex justify-center">
                    <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-white-500
                    rounded-md
                    to-white-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                        <div>
                            <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                    <div>
                                        <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-black font-black leading-6 lg:leading-10 md:text-left text-center">Become a member and start building the next big thing</h1>
                                    </div>
                                    <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-gray-200 font-bold  text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-indigo focus:outline-none">Join the community</button>
                                </div>
                                <div className="md:w-1/3 w-2/3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  
  )
}

export default home