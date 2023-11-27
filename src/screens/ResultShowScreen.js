import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from './api/yelp';
import { Image } from 'react-native-elements';

const ResultShowScreen = ({navigation , route}) => {
    
    const [result, setResult ]= useState(null);

    const id = route.params?.id;
    console.log(result);

    const getResult= async (id) =>{
    const responce= await yelp.get(`/${id}`)
    setResult(responce.data);
    }

    useEffect(()=>{
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }
    return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) =>{
        return <Image style={styles.Image} source={{uri : item}} />
      }}
      />
    </View>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({
    Image:{
        height:200,
        width:300
    }
})