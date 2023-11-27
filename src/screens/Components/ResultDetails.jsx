import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

const ResultDetails = ({result}) => {
  return (
    <View style={styles.margin}>
        <Image 
            source={{uri :result.image_url} } 
            style={styles.image}
        />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars,{result.review_count} Reviews
      </Text>
    </View>
  )
}

export default ResultDetails

const styles = StyleSheet.create({
    margin:{
        marginLeft:15
    }
    ,
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    }
})