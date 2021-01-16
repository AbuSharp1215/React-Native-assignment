import React, { PureComponent } from 'react';
import {
    View
} from 'react-native'


export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }


  template(){
    return (
      <View style={{flex:1, 
        flexDirection: 'column',
      justifyContent: 'flex-start', 
      backgroundColor: 'white',
      elevation: 5,
      borderRadius: 6
      }}>
        
        <Image source={ {uri: 'https://image.tmdb.org/t/p/w500/aHYUj0hICtWZ5tPiCIm6pWUcjYK.jpg'} }
            style={ {
              flex:1,
              borderRadius:6,
              elevation:5,
              marginHorizontal:5,
              marginVertical:5
            }
         }
        />
        <Text style={{color:'black', fontSize:20, marginHorizontal:10}}>Shadow in the Cloud</Text>
        <ScrollView style={{flex:1}} >
        <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:10,
        
        }}>
          
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Duration</Text>
          <Text style={{color:'#909090', fontSize:15}}>2 hr 30 min</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start',
              paddingLeft:20
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Rating</Text>
          <Text style={{color:'#909090', fontSize:15}}>6.7 / 10</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Language</Text>
          <Text style={{color:'#909090', fontSize:15}}>English</Text>
          </View>
  
        </View>
  
        <View style={{ 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:8,
        
        }}>
             <Text style={{color:'#000', fontSize:20}}>Synopsis</Text>
             <Text style={{color:'#909090', fontSize:14, marginVertical:5, textAlign:'justify'}}>A WWII pilot traveling with top secret documents on a B-17 Flying Fortress encounters an evil presence on board the flight.</Text>
             
             <Text style={{color:'#000', fontSize:20, marginTop:10}}>Genre</Text>
             <Text style={{color:'#909090', fontSize:14, marginTop:5, textAlign:'justify'}}>- Action - Drama - Horror - War</Text>
          
        </View>
        {/* --------------- */}
        <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:10,
        
        }}>
          
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Revenue</Text>
          <Text style={{color:'#909090', fontSize:15}}>$15,000</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start',
              paddingLeft:20
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Status</Text>
          <Text style={{color:'#909090', fontSize:15}}>Released</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color:'#000', fontSize:20}}>Date</Text>
          <Text style={{color:'#909090', fontSize:15}}>21-2-2021</Text>
          </View>
  
        </View>
  
  
  {/* --------------- */}
  
  
  
        <View style={{ 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:8,
        
        }}>
             
             <Text style={{color:'#000', fontSize:20, marginVertical:5}}>Production Company</Text>
             <View style={{ 
               flex:1,
              flexDirection: 'row',
              justifyContent: 'flex-start', 
              backgroundColor: 'white',
             }}>
               <View style={{ 
                flex:1,
                flexDirection: 'column',
                justifyContent: 'flex-start', 
                alignItems:'center',
                backgroundColor: 'white',
              }}>
                <Text style={{color:'#909090', fontSize:15, textAlign:'center'}}>Four Knights Film</Text>
                  <Image source={ {uri: 'https://image.tmdb.org/t/p/w500/fvvFNvMUsRGTP1MUqWQKHMMc8a1.png'} }
                    style={ {
                      width:100,
                      height:100,
                      borderRadius:50,
                      marginHorizontal:5,
                      marginVertical:5
                    }
                }
                />
                
                <Text style={{color:'#909090', fontSize:15, textAlign:'center'}}>New Zealand</Text>
             </View>
  
             <View style={{ 
                flex:1,
                flexDirection: 'column',
                justifyContent: 'flex-start', 
                alignItems:'center',
                backgroundColor: 'white',
              }}>
                <Text style={{color:'#909090', fontSize:15, textAlign:'center'}}>Rhea Films</Text>
                  <Image source={ {uri: 'https://image.tmdb.org/t/p/w500/fvvFNvMUsRGTP1MUqWQKHMMc8a1.png'} }
                    style={ {
                      width:100,
                      height:100,
                      borderRadius:50,
                      marginHorizontal:5,
                      marginVertical:5
                    }
                }
                />
                
                <Text style={{color:'#909090', fontSize:15, textAlign:'center'}}>United States of America</Text>
             </View>
               
                
              </View>
  
             
  
        </View>
        </ScrollView>
      </View>
      
    );
  }


  render() {
     //const {data} = this.props.route.params;
    return (
        this.template()
    );
  }
};