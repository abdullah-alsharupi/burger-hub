import React from 'react';
import { Text } from 'react-native';
import { ErrorTextProps } from '../../../types/types';

const ErrorText: React.FC<ErrorTextProps> = ({ message }) => {
    return (
        <Text style={{ color: 'red', textAlign: 'center' }}>{message}</Text>
    );
};

export default ErrorText;
