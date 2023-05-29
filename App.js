import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Form from './components/Form';
import CloseIcon from './components/prueba';
const App = () => {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleTelefonoChange = (text) => {
    setTelefono(text);
  };

  const handleDireccionChange = (text) => {
    setDireccion(text);
  };

  const toggleModal = () => {
    // Lógica para mostrar/ocultar el modal o realizar alguna acción adicional
  };

  const limpiarInputs = () => {
    setNombre('');
    setEmail('');
    setTelefono('');
    setDireccion('');
  };


  return (
    <View style={styles.container}>
      {/* <CloseIcon/> */}
      <Form
        nombre={nombre}
        email={email}
        telefono={telefono}
        direccion={direccion}
        handleNombreChange={handleNombreChange}
        handleEmailChange={handleEmailChange}
        handleTelefonoChange={handleTelefonoChange}
        handleDireccionChange={handleDireccionChange}
        toggleModal={toggleModal}
        limpiarInputs={limpiarInputs}
      />
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 20,
    paddingVertical: 20,
  },

});

export default App;
