import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const MealSelection = () => {
  const [selectedMeal, setSelectedMeal] = useState('');
  const navigation = useNavigation();

  const handleMealSelection = (itemValue) => {
    setSelectedMeal(itemValue);
    if (itemValue) {
      navigation.navigate(itemValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Selection</Text>

      <Picker
        selectedValue={selectedMeal}
        onValueChange={handleMealSelection}
        style={styles.picker}
      >
        <Picker.Item label="Select a meal category" value="" />
        <Picker.Item label="Starter" value="StarterMenu" />
        <Picker.Item label="Main Meals" value="MainMeals" />
        <Picker.Item label="Deserts" value="Deserts" />
      </Picker>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('ChefsMenu')}>
          <Text style={styles.arrow}>← Back to Chefs Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F4F6', // Light gray for a softer look
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold', // Bold for emphasis
    color: '#34495E', // Darker grayish-blue color
    textAlign: 'center', // Center the title
    fontFamily: 'Roboto', // Custom font (replace with your font)
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BDC3C7', // Lighter border for the picker
    borderRadius: 10, // Rounded corners
    backgroundColor: '#FFFFFF', // White background for picker
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  navigation: {
    marginTop: 20,
    alignItems: 'center', // Centering navigation items
  },
  arrow: {
    fontSize: 18,
    color: '#2980B9', // Brighter blue color for the arrow
    fontWeight: 'bold', // Bold for visibility
  },
});