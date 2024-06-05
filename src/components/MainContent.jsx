import React from "react";
import { Flex } from "antd";
import SuppliersList from "./SuppliersList";
import MobileAlert from "./MobileAlert";

export default function MainContent() {

  return (
    <div style={
      { flex: 1 }
    }>
      <Flex vertical gap='2.3rem'>
        
        <SuppliersList />
      </Flex>
    </div>
  );

}