
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';

import Details from './src/screens/Details';
import Search from './src/screens/Search';
import ResultShowScreen from './src/screens/ResultShowScreen';


export type RootStackParamList = {
  Search: undefined;
  Detail: { productId: string };
  ResultShowScreen: { productId: string };
};

const stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Search'>
      
      <stack.Screen name='Search' 
      component={Search} 
      options={{
          title:"trending products"
        }}/>

      <stack.Screen name='Detail' 
      component={Details} 
      options={{
          title:"Details"
        }}/>

<stack.Screen name='ResultShowScreen' 
      component={ResultShowScreen} 
      options={{
          title:"ResultShowScreen"
        }}/>

      </stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
