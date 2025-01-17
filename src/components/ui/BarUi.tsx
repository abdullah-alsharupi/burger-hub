import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
 

const BarUI = ({ onClick }:any) => {
  

  return (
       <TouchableOpacity onPress={onClick} style={[styles.container]}>
        <View style={styles.bar} />
        <View style={styles.barMedium} />
        <View style={styles.bar} />
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display:'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 28,
    height: 15,
    marginLeft:25,
    
    },
  bar: {
    backgroundColor: 'darkcyan',
    width: 22,
    height: 2,
    borderRadius: 1,
  },
  barMedium: {
    backgroundColor: 'darkcyan',
    width: 14,
    height: 2,
    borderRadius: 1,
  },
});

export default BarUI;