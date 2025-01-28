import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from '../Button';
import { router } from 'expo-router';

type CardContentProps = {
  imageSource: ImageSourcePropType;  
  title: string; 
  price: string;  
  id: string;
};
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardContent = ({ id, imageSource, title, price }: CardContentProps) => {
  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image 
          source={imageSource}  
          style={styles.image}
          resizeMode="cover" 
        />
         
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>  
        <Text style={[styles.text, { color: '#AF042C' }]}>{price}</Text> 
      </View>

      <Button 
        title="Customize" 
        size="small" 
        color="white" 
        onClick={() => router.navigate(`/(drawer)/products/${id}`)} 
      /> 
    </View>
  );
};


  
const styles = StyleSheet.create({
  imageWrapper: {
    position: 'absolute',
    top: -40,
    alignSelf: 'center',
    width: '100%', // تأكد من أن العرض هنا محدد
    height: 150,
    
  },
  image: {
    width: '100%',
    height: '100%', // استخدام 100% لجعل الصورة تتناسب مع الكارد

  },

  textContainer: {
    marginTop: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default CardContent;