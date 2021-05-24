import React, {useState} from 'react';
import { StyleSheet, Text, FlatList, Pressable, View, SafeAreaView, TextInput, Button } from "react-native"

export default function App() {

  const [text, setText] = useState("");
  const [listData, setListData] = useState([])

  const addItem = value => {
    const newData = [value, ...listData]
    setListData(newData)
    setText("")
  }

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

  const HeaderComponent = () => <SafeAreaView style={styles.headerContainer}>
    <Text style={styles.title}>Lista de tareas</Text>
    <TextInput
      style={styles.textInput}
      placeholder={"Ingrese una nueva tarea"}
      onChangeText={text => setText(text)}
      value={text}
      multiline
      numberOfLines={2}
    />
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => addItem(text)}
        title="Agregar"
        disabled={text == "" || listData.includes(text)}
      />
    </View>
  </SafeAreaView>

  return (
    <FlatList
      ListHeaderComponent={HeaderComponent}
      stickyHeaderIndices={[0]}
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
    paddingVertical: 10,
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
  headerContainer: {
    backgroundColor: '#fff',
    borderColor: '#777',
    borderRadius: 4,
    borderWidth: 5,
    marginHorizontal: '10px',
    marginBottom: '10px',
  },
  title: {
    fontSize: 30,
    padding: '10px'
  },
  textInput: {
    fontSize: 20,
    margin: '15px',
    padding: '7px',
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonContainer: {
    margin: '15px'
  }
});
