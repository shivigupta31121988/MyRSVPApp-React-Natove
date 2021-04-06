import React from "react";
import { View, Text, StyleSheet,Button  } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
      <Text>This is the About screen!</Text>
      
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
export default About;