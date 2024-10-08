import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './Screens/Home';
import ChefsMenu from './Screens/ChefsMenu';
import Login from './Screens/Login';
import MealSelection from './Screens/MealSelection';
import StarterMenu from './Screens/StarterMenu';
import MainMeals from './Screens/MainMeals';
import Deserts from './Screens/Deserts';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName='Home'>
<Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
<Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
<Stack.Screen name='ChefsMenu' component={ChefsMenu} options={{headerShown: false}}/>
<Stack.Screen name='MealSelection' component={MealSelection} options={{headerShown: false}}/>
<Stack.Screen name='StarterMenu' component={StarterMenu} options={{headerShown: false}}/>
<Stack.Screen name='MainMeals' component={MainMeals} options={{headerShown: false}}/>
<Stack.Screen name='Deserts' component={Deserts} options={{headerShown: false}}/>
</Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: "lightblue"
  }
});

