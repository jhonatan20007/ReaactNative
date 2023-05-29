import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CloseIcon = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="closecircleo" size={30} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default CloseIcon;
