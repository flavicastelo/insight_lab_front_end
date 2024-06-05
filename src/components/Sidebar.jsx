import React, { useState } from "react";
import { Flex,  Menu } from "antd";
import { BiArchive, BiHome, BiLogOut, BiUserPlus } from "react-icons/bi";

export default function Sidebar() {
  const items = [
    {
      key: '1',
      icon: <BiHome />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <BiUserPlus />,
      label: 'Novo Fornecedor',
    },
    {
      key: '3',
      icon: <BiLogOut />,
      label: 'Logout',
    },

  ];

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <BiArchive />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className="menu-bar"
        items={items} />
    </>
  );

}