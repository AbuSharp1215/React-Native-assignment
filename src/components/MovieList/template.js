import React, { PureComponent } from 'react';


import {
    Text,
    View,
    FlatList,
    Image,
    Alert,
    TouchableOpacity
}
from 'react-native'
import { COLORS } from '../colors';


const uri = 'https://api.themoviedb.org/3/movie/'
const api = '?api_key=0e0c5832e7ae101504307640658e5395&language=en-US'

const navigation = React.createRef();

export class MovieTemplate extends PureComponent{
    constructor(props) {
        super(props);

    this.state = {
        data: {},
        genre_val: [],
      };
    }

    navigate(name, params) {
      navigation.current && navigation.current.navigate(name, params);
    }
  
    componentDidMount() {
      fetch(uri+this.props.id+api)
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json })
          this.setState({ genre_val: json.genres });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    template() {
      const { data, genre_val } = this.state;
            var params = {
                title:this.props.title,
                url:this.props.url,
                adult:this.props.adult,
                genre:this.props.genre,
                lang:this.props.lang,
                date:this.props.date,
                rating:this.props.rateing
            }
            return (
               <TouchableOpacity  onPress = { () => {
                 Alert.alert("Hello")
                // this.props.navigation.navigate('Details' , {data: data})
              } }>
              <View style={{flex:1, 
                flexDirection: 'row',
              justifyContent: 'flex-start', 
              backgroundColor: 'white',
              marginHorizontal:10,
              marginVertical:8,
              elevation: 5,
              borderRadius: 6
              }}
             
              >
                <Image source={ {uri: params.url} }
                    style={ {
                      width:150, 
                      height:200,
                      marginHorizontal:5,
                      marginVertical:5,
                      borderRadius:10
                    }
                 }
                />
                <View style={{flex:1, 
                flexDirection: 'column',
                justifyContent: 'flex-start', 
                backgroundColor: 'white',
                marginHorizontal:10,
                marginVertical:8,
                }}>
                  <View style={{
                      flex:1,
                      justifyContent: 'flex-start'
                    }
                  }>
                    <Text style={{color: COLORS.black, fontSize:20}}>{params.title}</Text>
                  <Text style={{color: COLORS.grey, fontSize:15}}>{params.date} | {params.lang}</Text>
                  <View
                  style={{
                      flex:1,
                      flexDirection:"row",
                      flexWrap:"wrap"
                  }}
                  >
                  {
                      this.state.genre_val.map((item, index) =>{
                          return (
                            <Text key={index} style={{color: COLORS.grey, fontSize:15}}> - {item.name}</Text>
                          )
                      })
                  }
                  </View>
                 
                  </View>

                  <View style={{
                      flex:1,
                      justifyContent: 'flex-end'
                    }
                  }>
                    
                  <Text style={{color: COLORS.grey, fontSize:15}}>Rating: {params.rating} out of 10</Text>
                  <Text style={{color: COLORS.grey, fontSize:15}}>Content: {params.adult?"A":"U"}</Text>
                  </View>

                </View>
                
              </View>
              </TouchableOpacity>

            )
    }
    
        render(){

          return this.template()
            
        }
}