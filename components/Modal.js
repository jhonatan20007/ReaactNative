import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyModal = ({ isModal, onClose, data }) => {
  const [eliminar, setEliminar] = useState(false); 

  if (!isModal) {
    return null;
  }

  const handleEdit = () => {
    // Lógica para editar el elemento
    onClose(); // Cerrar el modal después de editar
  };

  const handleDelete = () => {
    // Lógica para eliminar el elemento
    console.log("Eliminar elemento:", data);
    setEliminar(true);
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="closecircleo" size={30} color="black" />
          </TouchableOpacity>

          {eliminar ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Elemento eliminado</Text>
            </View>
          ) : (
            <>
              <Text style={{ color: "black" }}>Nombre: {data.nombre}</Text>
              <Text style={{ color: "black" }}>Email: {data.email}</Text>
              <Text style={{ color: "black" }}>Teléfono: {data.telefono}</Text>
              <Text style={{ color: "black" }}>Dirección: {data.direccion}</Text>
            </>
          )}

          {eliminar ? null : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleEdit} style={styles.button}>
                <AntDesign name="edit" size={20} style={styles.icon} />
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete} style={styles.button}>
                <AntDesign name="delete" size={20} style={styles.icon} />
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});

export default MyModal;
