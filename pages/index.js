import { Row, Col, Form, Select, InputNumber, Switch, Slider, Button } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import React from 'react'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;




const FormItem = Form.Item
const Option = Select.Option

const content = {
  marginTop: '100px',
}

class About extends React.Component {
  state = {
    collapsed: false,
    selectedmenu: "Home"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  seltos = (key ) => {
    this.setState({
      selectedmenu:  key
    });
  };
  render() {
    return(<Layout>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.seltos}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DownloadOutlined />}>
            GetDown
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        
        
      <Row>
      <Col flex="100px">  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })} </Col>
      <Col flex="auto"> <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb></Col>
      </Row>
     
        </Header>
       
        <Content
          className="site-layout-background"
          style={{
            margin: '12px 12px',
            padding: 8,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>)

  }
}

export default About