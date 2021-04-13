import './App.css'
import React, {useState, useEffect} from 'react'
import TreeComponent from './TreeComponent'
import {useData} from './useData'

const urlJSON = 'https://gist.githubusercontent.com/curran/1dd7ab046a4ed32380b21e81a38447aa/raw/countryHierarchy.json'
 
const width = document.body.clientWidth
const height = document.body.clientHeight

const margin = {
    top : height/66,
    left : width/42,
    bottom : height/66,
    right : width/42
}

  
const App = () => {
  
  const  data = useData(urlJSON);
  
  if(!data){
      return (<pre>Loading Data....</pre>)
  }

  return (
    <div className="App">
    <TreeComponent height={height} width={width} margin={margin} data={data}/>            
    </div>
  )
}

export default App
