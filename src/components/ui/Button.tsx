import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    title: string;
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'white';
    onClick?: () => void;
};

const Button = ({ title, size, color, onClick }: ButtonProps) => {
    const textColor = color === 'red' ? '#ffffff' : '#AF042C';
    const borderColor =   color === 'red' ? '#ffffff' : '#AF042C'; 
    const backgroundColor = color === 'red' ? '#AF042C' : '#ffffff'; 

    return (
        <TouchableOpacity
            style={[styles.button, { borderColor, backgroundColor }, styles[size]]} // Use backgroundColor here
            onPress={onClick}
        >
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      
        borderWidth: 1,
        borderRadius: 30,  
        paddingVertical: 0,
        paddingHorizontal: 10,
        margin: "auto",  
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    small: {
        width: 100,
        height:40

    },
    medium: {
        width: 200,
        height:60
    },
    large: {
        width: 300,
        borderRadius: 18,
        height: 60,
    },
});

export default Button;