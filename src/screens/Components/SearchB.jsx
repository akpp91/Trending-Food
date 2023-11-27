import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const SearchB = ({term, onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.backgroundstyle}>
      <Icon size={30} color="black" name="search" style={styles.IconStyle}/>
      <TextInput 
          placeholder='Search' 
          style={styles.inpuStyle}
          value={term}
          onChangeText={newTerm=>onTermChange(newTerm)}
          onEndEditing={()=>{onTermSubmit()}}
      />
    </View>
  )
}

export default SearchB

const styles = StyleSheet.create({
    backgroundstyle:{
      marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal: 15,
flexDirection:'row',
marginBottom:10,
marginLeft:15
    },
    
    inpuStyle:{
      flex:1,
      fontSize:18
    },
    IconStyle:
    {
      fontSize:35,
      alignSelf:'center',
      marginHorizontal:15
    }
})