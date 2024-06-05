import { Button, Card, Flex, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import suppliersData from "../database/suppliersData";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const { Meta } = Card;
export default function SuppliersList() {
  const columns = [
    {
      title: 'Fornecedor',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Telefone',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <BiEdit />
          <MdDeleteOutline />
        </Space>
      ),
    },
  ]
  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title level={4} strong className="primary--color">
          Lista de Fornecedores
        </Typography.Title>
      </Flex>

      <Flex wrap='wrap' align="center" justify="center" gap='large' className="supplier-container">
        <Table style={{width: '100%'}} columns={columns} dataSource={suppliersData} />
      </Flex>
    </>
  );

}