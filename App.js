import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
import BarraSuperior from './components/ui/Barra';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

//Definir el tema

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655BF'
  }
}

const App = () => {
  const [actualizarClientes, setActualizarClientes] = useState(true);
  return (
    <>
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="inicioScreen"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor: theme.colors.primary
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                //fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
              name="inicioScreen"
              component={Inicio}
              options={({navigation, route})=>({
                title: 'Inicio',
                /*headerLeft: props=><BarraSuperior {...props}
                                  navigation={navigation}
                                  route={route}
                                />
                */
              })}
            />
            <Stack.Screen
              name="nuevoClienteScreen"
              component={(NuevoCliente)}
              options={{
                title: 'Nuevo Cliente'
              }}
            />
            <Stack.Screen
              name="detallesClienteScreen"
              component={DetallesCliente}
              options={{
                title: 'Detalles Cliente'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
