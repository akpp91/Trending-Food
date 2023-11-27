import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchB from './Components/SearchB'
import UseResult from './hooks/UseResult'
import ResultList from './Components/ResultList'


const Search = () => {
  
  const filterResultsByPrice =(price) =>{
    return results.filter( results =>{
      return results.price == price;
    }
    )
  }

  const [term, setTerm] = useState('');
  const [searchApi ,results] =UseResult();  
  return (
    <>
      <SearchB 
      term={term} 
      onTermChange={(newTerm) =>{setTerm(newTerm)}}
      onTermSubmit={()=>{searchApi(term)}}
      ></SearchB>
      
      <ScrollView>
      <ResultList 
      results={filterResultsByPrice('$')} 
      title='Cost Effective'
      
      />
      <ResultList 
      results={filterResultsByPrice('$$')} 
      title='Bit Pricier'
      
      />
      <ResultList 
      results={filterResultsByPrice('$$$')} 
      title='Big Spender'
      
      />
      </ScrollView>
    </>
  )
}

export default Search

const styles = StyleSheet.create({})