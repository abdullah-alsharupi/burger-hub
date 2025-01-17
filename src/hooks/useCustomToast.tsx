import { ToastOptions, useToast } from "react-native-toast-notifications";
 import { AntDesign } from "@expo/vector-icons";

const defaultToastOptions: ToastOptions = {
  placement: "top",
  duration: 3000,
  animationType: "slide-in",
  normalColor:'#091E3A',
  successColor: '#256730',
  dangerColor: '#832121',
  warningColor: '#FAB504',
  successIcon: <AntDesign name="check" size={16} color={'#fff'} />
};

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = (message: string, options: Partial<ToastOptions> = {}) => {
    toast.show(message, {
      ...defaultToastOptions,
      ...options,
    });
  };

  return showToast;
};