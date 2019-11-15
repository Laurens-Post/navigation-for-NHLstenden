import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

const handlePress = () => AlertExample

const AlertExample = () => {
	const showAlert = () => {
		Alert.alert(
		'Dont press OK!'
		)
	}
}

  return (  
    <View style={styles.container}>
      <Text>Hoi Roykie! Hoe gaat het met jou?</Text>
	  
	  <Text> </Text>
	  
	  <Button
	  title="Open Navigatie"
	  type="clear"
	  color="red"
	  onPress={AlertExample}
	  />

	  <Text>Drukkuh</Text>
	  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
