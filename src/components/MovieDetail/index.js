import React, { PureComponent } from 'react';
import {
    View, Image, Text, ScrollView, Alert
} from 'react-native'
import { COLORS } from '../colors';

const nologo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export default class MovieDetail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }


  template(){
    const {data} = this.props.route.params;
    return (
      <View style={{flex:1, 
        flexDirection: 'column',
      justifyContent: 'flex-start', 
      backgroundColor: 'white',
      elevation: 5,
      borderRadius: 6
      }}>
        
        <Image source={ {uri: 'https://image.tmdb.org/t/p/w500'+data.backdrop_path} }
            style={ {
              flex:1,
              borderRadius:6,
              marginHorizontal:5,
              marginVertical:5
            }
         }
        />
        <Text style={{color: COLORS.black, fontSize:20, marginHorizontal:10}}>{data.original_title}</Text>
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
            
          <Text style={{color: COLORS.black, fontSize:20}}>Duration</Text>
          <Text style={{color: COLORS.grey, fontSize:15}}>{JSON.stringify(data.runtime)} min</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start',
              paddingLeft:20
            }
          }>
            
          <Text style={{color: COLORS.black, fontSize:20}}>Rating</Text>
          <Text style={{color: COLORS.grey, fontSize:15}}>{JSON.stringify(data.vote_average)} / 10</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color: COLORS.black, fontSize:20}}>Language</Text>
          {data.spoken_languages.map((item, index) => {
             return <Text key={index} style={{color: COLORS.grey, fontSize:15}}> {item.name} </Text>
          })}
          </View>
  
        </View>
  
        <View style={{ 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        backgroundColor: 'white',
        marginHorizontal:10,
        marginVertical:8,
        
        }}>
             <Text style={{color: COLORS.black, fontSize:20}}>Synopsis</Text>
             <Text style={{color: COLORS.grey, fontSize:14, marginVertical:5, textAlign:'justify'}}>{data.overview}</Text>
             
             <Text style={{color: COLORS.black, fontSize:20, marginTop:10}}>Genre</Text>
             <Text style={{color: COLORS.grey, fontSize:14, marginTop:5, textAlign:'justify'}}>
             { data.genres.map((item, index) =>{
                          return (
                             ' - '+item.name
                          )
                      })
              }</Text>
          
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
            
          <Text style={{color: COLORS.black, fontSize:20}}>Revenue</Text>
          <Text style={{color: COLORS.grey, fontSize:15}}>${data.revenue}</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start',
              paddingLeft:20
            }
          }>
            
          <Text style={{color: COLORS.black, fontSize:20}}>Status</Text>
          <Text style={{color: COLORS.grey, fontSize:15}}>{data.status}</Text>
          </View>
  
          <View style={{
              flex:1,
              justifyContent: 'flex-start'
            }
          }>
            
          <Text style={{color: COLORS.black, fontSize:20}}>Date</Text>
          <Text style={{color: COLORS.grey, fontSize:15}}>{data.release_date}</Text>
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
             
             <Text style={{color: COLORS.black, fontSize:20, marginVertical:5}}>Production Company</Text>
             <View style={{ 
               flex:1,
              flexDirection: 'row',
              justifyContent: 'flex-start', 
              backgroundColor: 'white',
             }}>
               <ScrollView horizontal={true}>
               {
                 data.production_companies.map((item, index) => {
                   return (
                    <View key={index} style={{ 
                      flex:1,
                      flexDirection: 'column',
                      justifyContent: 'flex-start', 
                      alignItems:'center',
                      marginHorizontal:10,
                      backgroundColor: 'white',
                    }}>
                      <Text style={{color: COLORS.grey, fontSize:15, textAlign:'center'}}>{item.name}</Text>
                        <Image source={ {uri: (item.logo_path?'https://image.tmdb.org/t/p/w500'+item.logo_path:nologo )} }
                          style={ {
                            width:100,
                            height:100,
                            marginHorizontal:5,
                            marginVertical:5
                          }
                      }
                      />
                      
                      <Text style={{color: COLORS.grey, fontSize:15, textAlign:'center'}}>{item.origin_country}</Text>
                   </View>
                   )
                 })
               }
               </ScrollView>
  
             
                
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