import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

 import { Stack } from 'expo-router'
import AuthContainer from '@/src/components/auth/AuthContainer'


export default function index() {
  return (
  <>
  <Stack.Screen options={{headerShown:false}}/>
 <AuthContainer/>  
 
  </>
  )
}



const styles = StyleSheet.create({})