import React, { useState } from "react";
import { Flex, Typography } from "antd";
import Search from "antd/es/input/Search";

export default function HeaderComponent() {

  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} type="secondary" className="header-text ">
          Bem-vindo!
        </Typography.Title>
        <Flex align="center" gap='3rem'>
          <Search placeholder="Buscar" allowClear  />
        </Flex>
      </Flex>

    </>
  );

}