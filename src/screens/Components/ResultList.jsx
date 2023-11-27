import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetails from './ResultDetails';
import { useNavigation } from '@react-navigation/native';



const ResultList = ({title, results }) => {

    const navigation= useNavigation();

    if (!results.length) {
        return null;
    }
    
    return (

    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(results) =>{
                 results.id;
      }}
      renderItem={
        ({item})=>{
                return (
                <TouchableOpacity onPress={()=>{navigation.navigate('ResultShowScreen', {id: item.id })}}>
                <ResultDetails 
                    result={item}
                />
                </TouchableOpacity>
                )
        }
      }
      
      />
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
marginBottom:5
    },  
    container:{
        marginBottom:10
    }
})