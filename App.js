import React, {useState} from 'react';
import { StyleSheet, Text, FlatList, Pressable } from "react-native"

export default function App() {

  const [listData, setListData] = useState([
      "Compras en el super mercado",
      "Entrega de productos en centro comercial",
      "Compra de materiales para reparaciones en la casa",
      "Recoger a los niños en el colegio",
      "Terminar trabajo de publicidad",
      "Reunión con clientes",
      "Llevar vehículo a mantenimiento"
  ])

  const removeItem = value => {
    const newData = listData.filter((item) => item != value)
    setListData(newData)
  }

  const ItemComponent = ({ item }) => <Pressable
    style={styles.card}
    onPress={() => removeItem(item)}
  >
    <Text style={styles.text}>{item}</Text>
  </Pressable>

  return (
    <FlatList
      data={listData}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item}
      renderItem={ItemComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d3d3d',
    alignItems: 'stretch',
    paddingVertical: 20,
    height: '100%'
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
  },
  text: {
    fontSize: 20,
    margin: 30
  },
});
