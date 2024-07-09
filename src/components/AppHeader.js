import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { RadarChartOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function AppHeader() {
  return  <Header className="!bg-white border-b border-[#f1f1f1]  flex items-center justify-between sticky top-0 z-10">


    <div className='flex items-center gap-2'>
    <RadarChartOutlined  className='text-3xl'/>
    <div>Academic</div>
    </div>
    <div className='flex items-center gap-2'><Avatar size={36} src="/one.jpg" />
    <div>Omar</div>
    </div>


  </Header>;
}

export default AppHeader
