import React ,{useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyModal from './Modal';

const Form = ({
  nombre,
  email,
  telefono,
  direccion,
  handleNombreChange,
  handleEmailChange,
  handleTelefonoChange,
  handleDireccionChange,
  toggleModal,
  limpiarInputs,
}) => {
  const [modalVisible, setModalVisible] = useState(false);


  const [data,setdata]=useState({}); 
  
 
  const modal=()=>{
    setdata({
      "nombre": nombre,
      "email":email,
      "telefono":telefono,
      "direccion":direccion,

    });
    setModalVisible(true);
    // console.log(data)
  }
  const onclosemodal=()=>{
    setModalVisible(false);
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={handleNombreChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={handleTelefonoChange}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={handleDireccionChange}
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={modal} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Limpiar" onPress={limpiarInputs} />
      </View>
      <MyModal isModal={modalVisible} onClose={onclosemodal} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default Form;
