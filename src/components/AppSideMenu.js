"use client";
import { Menu } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function AppSideMenu() {
    const pathname=usePathname()
    const [selectedKeys,setSelectedKeys]=useState(["1"])
useEffect(()=>{
    if(pathname.startsWith("/bookmarks")){
        setSelectedKeys(["2"])
    }else if (pathname.startsWith("/courses")){
        setSelectedKeys(["3"])
    } else if (pathname.startsWith("/tutorials")){
        setSelectedKeys(["4"])
    } else if (pathname.startsWith("/best-practices")){
        setSelectedKeys(["5"])
    } else if (pathname.startsWith("/certifications")){
        setSelectedKeys(["6"])
    } else if (pathname.startsWith("/resources")){
        setSelectedKeys(["7"])
    } else if (pathname.startsWith("/events")){
        setSelectedKeys(["8"])
    } else if (pathname.startsWith("/community")){
        setSelectedKeys(["9"])
    } else if(pathname==="/"){
        setSelectedKeys(["1"])
    }
},[pathname]); 
    
    const MenuItems=[
        {label:<Link href="/">Home</Link>,key:1},
        {label:<Link href="/bookmarks">Bookmarks</Link>,key:2},
        {type:"divider"},
        {label:<Link href="/courses">Courses</Link>,key:3},
        {label:<Link href="/tutorials">tutorials</Link>,key:4},
        {label:<Link href="/best-practices">Best Practices</Link>,key:5},
        {label:<Link href="/certifications">Certifications</Link>,key:6},
        {type:"divider"},
        {label:<Link href="/resources">Resources</Link>,key:7},
        {label:<Link href="/events">events</Link>,key:8},
        {label:<Link href="/community">Community</Link>,key:9},
    ]
  return <Menu mode="inline" items={MenuItems} selectedKeys={selectedKeys}></Menu>
    
  
}

export default AppSideMenu
