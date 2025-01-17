import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Favorites from '@/src/components/Favorite/Favorite'
import Header from '@/src/components/ui/Header'
import Disconnected from '../disconnected'

const FavoriteScreen = () => {
  return (
    <>
    <Header title='Favorites' backgroundColorCode='#ffffff'/>
    <Favorites/>
 
    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})