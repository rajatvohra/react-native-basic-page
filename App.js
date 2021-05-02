import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Squares, { styles } from './src/pages/squares';
import Names from './src/pages/names';
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container1}>
      <Button style={styles.button}
        title="Go to Challenge 1"
        color="#9400d3"
        onPress={() => navigation.navigate('challenge1')}
      />
       <View style={styles.spacesmall} />
      <Button style={styles.button}
        title="Go to Challenge 2"
        color="#9400d3"
        onPress={() => navigation.navigate('challenge2')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="challenge1" component={Squares} />
      <Stack.Screen name="challenge2" component={Names} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;