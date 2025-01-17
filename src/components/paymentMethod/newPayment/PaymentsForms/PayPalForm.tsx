import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/ui/FormInput';
import Button from '@/src/components/ui/Button';
import { PaypalSchema, PaypalType } from '@/src/types/payment/PayPal';

 type PayPalFormProps = {
    onSubmit: (data: PaypalType) => void; 
  };
  const PayPalForm: React.FC<PayPalFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PaypalType>({
    resolver: zodResolver(PaypalSchema),
  });

  return (
    <View style={styles.container}>
         <FormInput
              style={styles.input}
              control={control}
              name="account_name"
              placeholder="Account Name"
             />
               <FormInput
              style={styles.input}
              control={control}
              name="phone_number"
              placeholder="Phone Number"
             />
               <FormInput
               style={styles.input}
              control={control}
              name="email"
              placeholder="Email"
             /> 
  
  <Button title='Add Payment' color='red' size='medium' onClick={handleSubmit(onSubmit)}/>
  </View>
  );
};

export default PayPalForm;

const styles = StyleSheet.create({
  input: {
     height:80,
   
  },container:{
    height:350, 
  
  }
 
 
});
