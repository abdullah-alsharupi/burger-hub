import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressScreen from '@/src/components/address/AddressScreen'
import Header from '@/src/components/ui/Header';

const Addresses = () => {
  return (
    <>
  <Header title='addresses' backgroundColorCode='#f4f6f7'/>
    <AddressScreen/>

    </>
  )
}

export default Addresses

const styles = StyleSheet.create({})