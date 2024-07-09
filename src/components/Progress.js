import React from 'react'
import { Card, Flex,Avatar, Typography ,Progress} from 'antd'
import Title from 'antd/es/typography/Title'


const {Text}=Typography;

export default function userProgress() {
  return (
    <Card title="Progress">
        <Flex vertical align='center'>
            <Avatar size={64} src="/one.jpg"/>
            <Title level={4} style={{marginBottom:3,marginTop:5}}>
                Omar
            </Title>
            <Text type='secondary'>Basic Member</Text>
        </Flex>
        <Text>Frontend</Text>
        <Progress percent={30} status="active"/>
        <Text>Backend</Text>
        <Progress percent={40} status="active"/>
        <Text>Database</Text>
        <Progress percent={80} status="active"/>
        <Text>DevOps</Text>
        <Progress percent={10} status="active"/>

    </Card>
  )
}
