import { ModifierOption, Option } from '@/src/types/product/Customize';
import { PropsModifierList } from '@/src/types/product/props/PropsModifierList';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
 

const ModifierList= React.memo(({ selectedOptions, modifierName, options, modifierId, product, onClick }:PropsModifierList) => {
  const renderOptionText = (option: ModifierOption) => {
    const price = option.modifierOptionPrice ?? 0; 
    return `${option.modifierOptionName} ($${price})`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.modifierName}>{modifierName}</Text>
      {options.map(option => (
        <BouncyCheckbox
          key={option.modifierOptionId}
          text={renderOptionText(option)}
          fillColor="#AF042C"
          size={20}
          iconStyle={styles.checkboxIcon}
          style={styles.checkbox}
          textStyle={styles.checkboxText}
          isChecked={selectedOptions.some(selected => 
            selected.modifireId === modifierId && selected.modifireOptions.some(opt => opt.modifierOptionId === option.modifierOptionId)
          )}
          onPress={() => onClick(option, modifierId, modifierName)} 
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: 250,
  },
  modifierName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkboxIcon: {
    borderColor: '#AF042C',
    borderWidth: 2,
  },
  checkbox: {
    marginTop: 15,
  },
  checkboxText: {
    fontSize: 17,
    fontWeight: '500',
    width: 180,
  },
});

export default ModifierList;