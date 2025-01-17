import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderDetails from '@/src/components/oder-history/OrderDetails';
import Header from '@/src/components/ui/Header';

const OrderHistoryDetails = () => {
  return (
    <>
    <Header title='' backgroundColorCode=''/>
      <OrderDetails />
    </>
  )
}

export default OrderHistoryDetails;

const styles = StyleSheet.create({})