
import React,{useState} from "react";
import { View, Text, StyleSheet, Button,TextInput,Alert } from "react-native";



 //root navigation to home screen   
const Home = ({ navigation }) => {
  const [text, setText] = useState('');

   //view layout of the RSVP form
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
      <Text>Welcome to the Home screen!</Text>
      <Text>Name: </Text> <TextInput placeholder="Name" onChangeText={text => setText(text)}
        defaultValue={text} ></TextInput>
      <Text>Age: </Text> <TextInput ></TextInput>
      <Text>DOB: </Text> <TextInput></TextInput> 
      <Text>Profession(Employed/Student): </Text> <TextInput ></TextInput>
      <Text>Locality: </Text> <TextInput></TextInput>
      <Text>Number of Guests: </Text> <TextInput></TextInput>
      <Text>Address: </Text> <TextInput numberOfLines={2}></TextInput>
      <Button onPress={Alert.alert('data submitted!')} title="Submit" />
    </View>

  );
};
//style for the container to align controls in the center
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Home;