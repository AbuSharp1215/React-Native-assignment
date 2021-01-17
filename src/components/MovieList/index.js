import React, { PureComponent } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import { MovieTemplate } from './template'

//const url = 'https://api.themoviedb.org/3/movie/popular?api_key=0e0c5832e7ae101504307640658e5395&page=1'

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(this.props.uri)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.results });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
     // this.getData()
     
    const { data, isLoading } = this.state;

    return (
      <View>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <MovieTemplate 
              id={item.id}
              lang= {item.original_language}
              navigation = {this.props.navigation}
              />
              
            )}
          />
        )}
      </View>
    );
  }
};