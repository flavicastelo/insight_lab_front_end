import React, { useState } from "react";
import { Button, Flex, Layout } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Sidebar from "./Sidebar";
import HeaderComponent from "./Header";
import MainContent from "./MainContent";
import MobileAlert from "./MobileAlert";

const { Sider, Header, Content } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <MobileAlert />
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider">
        <Button
          type="text"
          icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header"><HeaderComponent /></Header>
        <Content className="content">
          <Flex gap='large'>
            <MainContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );

}