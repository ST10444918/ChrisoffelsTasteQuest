import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const StarterMenu = () => {
  const navigation = useNavigation();

  const starters = [
    { id: '1', name: 'Bruschetta', price: 50 },
    { id: '2', name: 'Stuffed Mushrooms', price: 70 },
    { id: '3', name: 'Caprese Salad', price: 60 },
    { id: '4', name: 'Spring Rolls', price: 55 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters Menu</Text>

      <FlatList
        data={starters}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R {item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('MealSelection')}>
          <Text style={styles.arrow}>← Back to Meal Selection</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MainMeals')}>
          <Text style={styles.arrow}>Next → To Main Meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StarterMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA', // Light gray for a modern feel
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold', // Make the title bold
    color: '#2C3E50', // Darker blue-gray color for contrast
    textAlign: 'center', // Center the title
    fontFamily: 'Roboto', // Custom font (replace with your font)
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1', // Lighter border for a subtle effect
    backgroundColor: '#FFFFFF', // White background for menu items
    borderRadius: 10, // Rounded corners for menu items
    marginBottom: 10, // Space between items
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // For Android shadow
  },
  itemName: {
    fontSize: 18,
    color: '#34495E', // Dark gray for item names
  },
  itemPrice: {
    fontSize: 18,
    color: '#27AE60', // Brighter green for item prices
    fontWeight: '600', // Semi-bold for emphasis
  },
  navigation: {
    marginTop: 20,
    alignItems: 'center', // Center the navigation items
  },
  arrow: {
    fontSize: 18,
    color: '#2980B9', // Bright blue for arrows
    fontWeight: 'bold', // Bold for visibility
    marginVertical: 10,
  },
});

