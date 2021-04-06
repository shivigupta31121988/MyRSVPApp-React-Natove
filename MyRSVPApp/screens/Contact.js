import React from "react";
import { View, Text, StyleSheet ,Button,FlatList,TextInput} from "react-native";

//declaring mock data to show as flat list
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    locality:'Toronto',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    locality:'Madrid',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    locality:'Barcelona',
  },
];

//defining item layout for the list
const Item = ({ title ,locality}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{title}</Text>
    <Text style={styles.locality}>{locality}</Text>
  </View>
);

//root navigation to hold 
const Contact = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.name} locality={item.locality} />
    
  );
//view layout for the Details page
  return (
    <View style={styles.container}>
      
      <Button  onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
      <Text>This is the Details screen!</Text>
      <TextInput></TextInput>
      <FlatList data={DATA} 
      renderItem={renderItem}
      keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});


export default Contact;