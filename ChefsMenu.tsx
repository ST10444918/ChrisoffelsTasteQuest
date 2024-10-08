import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const ChefsMenu = () => {
  const [meal, setMeal] = useState('');
  const [category, setCategory] = useState('Meals');
  const [meals, setMeals] = useState([]);
  const navigation = useNavigation();

  const addMeal = () => {
    if (meal.trim()) {
      setMeals([...meals, { name: meal, category }]);
      setMeal('');
      setCategory('Meals'); // Reset to default category
    }
  };

  const deleteMeal = (index) => {
    const newMeals = meals.filter((_, i) => i !== index);
    setMeals(newMeals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter meal name"
        value={meal}
        onChangeText={setMeal}
      />

      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main Meals" value="Main Meals" />
        <Picker.Item label="Deserts" value="Deserts" />
      </Picker>

      <Button title="Add Meal" onPress={addMeal} />

      <FlatList
        data={meals}
        renderItem={({ item, index }) => (
          <View style={styles.mealItem}>
            <Text>{item.name} ({item.category})</Text>
            <TouchableOpacity onPress={() => deleteMeal(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.navigation}>
        <Button title="Go to MealSelection" onPress={() => navigation.navigate('MealSelection')} />
        <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default ChefsMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  mealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  deleteButton: {
    color: '#E74C3C',
    fontWeight: 'bold',
  },
  navigation: {
    marginTop: 20,
    alignItems: 'center',
  },
});
