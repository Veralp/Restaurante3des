import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import EntregasScreen from './src/screens/entregas';
import MapScreen from './src/screens/map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Entregas' }}
        />
        <Stack.Screen
          name="EntregasScreen"
          component={EntregasScreen}
          options={{ title: 'Entregas' }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: 'Mapa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}