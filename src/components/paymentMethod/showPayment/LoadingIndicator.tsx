import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LoadingIndicatorProps } from '../../../types/types';

const LoadingIndicator: React.FC<LoadingIndicatorProps> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={'#AF042C'} />
        </View>
    );
};

export default LoadingIndicator;
