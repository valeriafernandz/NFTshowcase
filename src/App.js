import './App.css';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import GlobalStyles from './components/styles/Global';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SectionTitle} from "./components/styles/CardGrid.styled";

function App() {

  const [assets, setAssets] = useState([]);

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios.get(`https://api.opensea.io/api/v1/collections?asset_owner=0xc9b6321dc216d91e626e9baa61b06b0e4d55bdb1&offset=0&limit=200`)
      setAssets(result.data)
      console.log(result.data)
    }
    fetchItems();
},[]);

  return (
    <div className="App">
      <GlobalStyles/>
          <Header/>
          <SectionTitle>Latest collections</SectionTitle>
          <CardGrid assets={assets}/>
    </div>
  );
}

export default App;
