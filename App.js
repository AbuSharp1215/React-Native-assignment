import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieList from './src/components/MovieList';
import MovieDetail from './src/components/MovieDetail';
import { createStackNavigator } from '@react-navigation/stack';


function popular({navigation}) {
  const uri = 'https://api.themoviedb.org/3/movie/popular?api_key=0e0c5832e7ae101504307640658e5395&page=1';
  return (
    <MovieList uri={uri}
     navigation={navigation}
    />
  );
}

function topRated() {
  const uri = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0e0c5832e7ae101504307640658e5395&language=en-US&page=1';
  return (
    <MovieList uri={uri}/>
  );
}

function upComing() {
  const uri = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0e0c5832e7ae101504307640658e5395&language=en-US&page=1';
  return (
    <MovieList uri={uri}/>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Popular" component={popular} />
        <Stack.Screen name="BottomNav" component={App}/>
        <Stack.Screen name="Details" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Popular" component={popular} />
        <Tab.Screen name="Top Rated" component={topRated} />
        <Tab.Screen name="Upcoming" component={upComing} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}