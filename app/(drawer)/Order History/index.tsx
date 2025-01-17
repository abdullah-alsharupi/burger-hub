import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderHistoryScreen from '@/src/components/oder-history/OrderHistoryScreen'
import Header from '@/src/components/ui/Header'

const OderHistory = () => {
  return (
  <>
  <Header title='order history' backgroundColorCode='#ffffff'/>
  <OrderHistoryScreen />
  </>
  )
}

export default OderHistory

const styles = StyleSheet.create({})