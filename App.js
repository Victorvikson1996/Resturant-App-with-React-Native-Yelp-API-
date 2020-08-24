import React from 'react';
import { createAppContainer,  NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screeens/SearchScreen';
import ResultShowScreen from './src/screeens/ResultShowScreen';

const navigator =  createStackNavigator(
{
 Search: SearchScreen,
 ResultShow: ResultShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bussiness Search'
  }
}
);

export default createAppContainer(navigator);




// const Stack = createStackNavigator() 

// function MainStackNavigator() {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Business Search' component={SearchScreen}/>
//         <Stack.Screen name='ResultShow' component={ResultShowScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }







// export default MainStackNavigator;