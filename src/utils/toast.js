import Toast from 'react-native-root-toast';

export const showToast = text => {
  Toast.show(text, {
    position: 0,
    shadow: false,
    animation: false,
  });
};
