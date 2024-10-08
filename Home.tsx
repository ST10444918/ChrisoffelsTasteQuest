import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Login'); // Make sure 'Login' is the name of your Login screen
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./Logo.png')}
        style={styles.image}
        resizeMode="cover"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFE0', // Soft light green background
    padding: 16,
  },
  image: {
    width: '100%',
    height: 400, // Adjusted height for a better layout
    borderRadius: 15, // Rounded corners
    marginBottom: 20,
    borderWidth: 3, // Border around the image
    borderColor: '#76c7c0', // Matching border color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2E8B57', // Darker green for the title
    textAlign: 'center',
    fontFamily: 'YourCustomFont', // Custom font (replace with your font)
  },
  button: {
    backgroundColor: '#6A0AD6', // Bright purple color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%', // Full width for the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600', // Semi-bold text for emphasis
  },
});