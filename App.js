import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieList from './src/components/MovieList';
import MovieDetail from './src/components/MovieDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { API } from './src/api';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFire, faStar, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from './src/components/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



function popular({navigation}) {
  const uri = API.popular_api+API.api_key+API.lang+API.page;
  return (
    <MovieList uri={uri}
     navigation={navigation}
    />
  );
}

function topRated({navigation}) {
  const uri = API.toprated_api+API.api_key+API.lang+API.page;
  return (
    <MovieList uri={uri}
    navigation={navigation}
    />
  );
}

function upComing({navigation}) {
  const uri = API.upcoming_api+API.api_key+API.lang+API.page;
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
    <SafeAreaView
    style={{ flex: 1}}>
      <PopularStack.Navigator>
        <PopularStack.Screen name="Popular Movies" component={popular} />
        <PopularStack.Screen name="Details" component={MovieDetail} />
      </PopularStack.Navigator>
      </SafeAreaView>
    
  );
}

function TopStackNav() {
  return (
    <SafeAreaView
    style={{ flex: 1}}>
      <TopStack.Navigator>
        <TopStack.Screen name="Top Rated Movies" component={topRated} />
        <TopStack.Screen name="Details" component={MovieDetail} />
      </TopStack.Navigator>
      </SafeAreaView>
    
  );
}

function UpStackNav() {
  return (
    <SafeAreaView
    style={{ flex: 1}}>
      <UpStack.Navigator>
        <UpStack.Screen name="Upcoming Movies" component={upComing} />
        <UpStack.Screen name="Details" component={MovieDetail} />
      </UpStack.Navigator>
      </SafeAreaView>
    
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={
                ({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Popular')
                    {
                      iconName = faFire;
                    }
                    else if(route.name == 'Top Rated')
                      iconName = faStar;
                    else
                      iconName = faTicketAlt;

                    return <FontAwesomeIcon size={size} color={color} icon={iconName}/>;
                  },
                })
              }
              tabBarOptions={{
                activeTintColor: COLORS.red,
                inactiveTintColor: COLORS.grey,
              }}
            >
        <Tab.Screen name="Popular" component={StackNav} />
        <Tab.Screen name="Top Rated" component={TopStackNav} />
        <Tab.Screen name="Upcoming" component={UpStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}