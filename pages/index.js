import { Row, Col, Form, Select, InputNumber, Switch, Slider, Button } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  HomeOutlined,
  ControlOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Link from 'next/link'
import React from 'react'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

import Image from 'next/image'
import   User  from './user.js'
import   Home  from '../components/home.js'
import   Setting  from './setting.js'
import   Dashboard  from './dashboard.js'

const FormItem = Form.Item
const Option = Select.Option

const content = {
  marginTop: '100px',
}

class About extends React.Component {
  state = {
    collapsed: false,
    selectedmenu: "home"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  seltos = (e ) => {
    this.setState({
      selectedmenu:  e.key
    });
  };
  getGreeting() {
    let user = this.state.selectedmenu;
 
    if (user == "home" ) {
      return <Home />;
    }
    if (user == "dashboard" ) {
      return <Dashboard />;
    }
    if (user == "setting" ) {
      return <Setting />;
    }
    return <User />;
  }

  render() {
    return(<Layout>
  
      <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme="light" >
        <div className="logo"> <Image
        src="/me.png"
        alt="Picture of the author"
        width={299}
        height={102}
      /> </div>
        <Menu   mode="inline" defaultSelectedKeys={['home']} onSelect={this.seltos}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            dashboard
          </Menu.Item>
          <Menu.Item key="setting" icon={<ControlOutlined />}>
            setting
          </Menu.Item>
          <Menu.Item key="user" icon={<UserOutlined />}>
            user
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
        <Breadcrumb.Item> {this.state.selectedmenu} </Breadcrumb.Item>
     
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
        {this.getGreeting()}
        </Content>
      </Layout>
    </Layout>)

  }
}

export default About