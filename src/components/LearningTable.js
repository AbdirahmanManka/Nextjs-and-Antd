import { Space, Table, Tag } from 'antd'
import React from 'react'

function LearningTable() {
    const columns = [{
        title:"Course name",
        dataIndex:"courseName",
        key:"courseName"
    },
    {
        title:"Duration",
        dataIndex:"duration",
        key:"duration"
    },
    {
        title:"Level",
        dataIndex:"level",
        key:"level"
    },
    {
        title:"Status",
        dataIndex:"status",
        key:"status",
        render:(_,text)=>(
            <Tag color={text.status=== "Completed" ? "green": "blue"}>{text.status}</Tag>
        ),
        },
        {
            title:"Action",
            key:"action",
            render: ()=> (
                <Space size="middle">
                    <a href="#">View</a>
                    <a href="#">Delete</a>
                </Space>
                
                
            ),
        }

    
];
    const data = [{
        key: '1',
        courseName: 'React',
        duration: '2 months',
        level: 'Beginner',
        status:"In progress"
    },

    {
        key: '2',
        courseName: 'Node.js',
        duration: '1 month',
        level: 'Intermediate',
        status:"Completed"
    },
    {
        key: '3',
        courseName: 'MongoDB',
        duration: '1 month',
        level: 'Intermediate',
        status:"In progress"

    },
    {
        key: '4',
        courseName: 'Express.js',
        duration: '1 month',
        level: 'Intermediate',
        status:"Not started"
    },
    {
        key: '5',
        courseName: 'React Native',
        duration: '2 months',
        level: 'Intermediate',
        status:"Not started"
    }]
  return <Table className='mt-4' columns={columns} dataSource={data}/>
}

export default LearningTable
