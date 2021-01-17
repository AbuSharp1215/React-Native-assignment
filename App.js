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

function topRated({navigation}) {
  const uri = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0e0c5832e7ae101504307640658e5395&language=en-US&page=1';
  return (
    <MovieList uri={uri}
    navigation={navigation}
    />
  );
}

function upComing({navigation}) {
  const uri = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0e0c5832e7ae101504307640658e5395&language=en-US&page=1';
  return (
    <MovieList uri={uri}
    navigation={navigation}
    />
  );
}

const Tab = createBottomTabNavigator();

const PopularStack = createStackNavigator();

const TopStack = createStackNavigator();

const UpStack = createStackNavigator();

function StackNav() {
  return (
    
      <PopularStack.Navigator>
        <PopularStack.Screen name="Popular Movies" component={popular} />
        <PopularStack.Screen name="Details" component={MovieDetail} />
      </PopularStack.Navigator>
    
  );
}

function TopStackNav() {
  return (
    
      <TopStack.Navigator>
        <TopStack.Screen name="Top Rated Movies" component={topRated} />
        <TopStack.Screen name="Details" component={MovieDetail} />
      </TopStack.Navigator>
    
  );
}

function UpStackNav() {
  return (
    
      <UpStack.Navigator>
        <UpStack.Screen name="Upcoming Movies" component={upComing} />
        <UpStack.Screen name="Details" component={MovieDetail} />
      </UpStack.Navigator>
    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Popular" component={StackNav} />
        <Tab.Screen name="Top Rated" component={TopStackNav} />
        <Tab.Screen name="Upcoming" component={UpStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}