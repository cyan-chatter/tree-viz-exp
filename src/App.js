import './App.css'
import React, {useState, useEffect} from 'react'
import TreeComponent from './TreeComponent'
import {useData} from './useData'

const urlJSON = 'https://gist.githubusercontent.com/cyan-chatter/e5e74c590dd7d2ca5ce713c05d737c0c/raw/185d435de1d4ac08227dedbfd38fe7dd604af137/asiaO.json'
const urlJSON2 = 'https://gist.githubusercontent.com/curran/1dd7ab046a4ed32380b21e81a38447aa/raw/countryHierarchy.json' 

var width = document.body.clientWidth * 0.7
var height = document.body.clientHeight * 0.7

const dimensions = {
  height, width
}

console.log(width, height)
  

const App = () => {

  const onClickHandler = () => {
    console.log('clicked')
    setURL(urlJSON2)
  }

  const [URL,setURL] = useState(urlJSON)
  const Data = useData(URL)
    
  console.log('app runs Data is ', Data)
  if(!Data) return (<pre>Loading Data....</pre>)
  
  return (
    <div className="App">   
    <h1 className="App-header">VISUALIZE</h1>
    <br/>
    <button className="TempButton" onClick={onClickHandler}> Fetch Again </button>
    <TreeComponent dimensions= {dimensions} data={Data}/>
    </div>
  )
}

export default App
