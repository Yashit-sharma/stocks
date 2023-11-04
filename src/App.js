import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Stocks from './Components/Stocks';
import React, { useState } from 'react';
import Graph from './Components/Graph';

export default function App() {
  const [Symbol, setSymbol] = useState('')
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
           <Navbar />
            <About />
          </>
        }>
        </Route>
        <Route path='/Stocks' element={
          <>
           <Navbar />
           <Stocks ticker_Name={setSymbol} />
          </>
        }>
        </Route>
        <Route path='/graphs' element={
          <>
          <Navbar />
          <Graph symbol={Symbol}/>
          </>}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}



  // useEffect(() => {
  //   const fetchStockData = async () => {
  //     try {
  //       const API_KEY = 'DA3G3WDWKQLZTGW2';
  //       const symbol = "AAPL"; 
  //       // console.log(symbol)
  //       const response = await axios.get(
  //         `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
  //       );
  //       // Process the response data to extract high values
  //       const stockData = response.data['Time Series (Daily)'];
  //       const extractedHighValues = Object.values(stockData).map(item => parseFloat(item['2. high']));
  //       setHighValues(extractedHighValues);
  //       setloading(true);
  //     } catch (error) {
  //       console.error('Error fetching stock data: ', error);
  //     }
  //   };
  //   fetchStockData();
  // }, []);
  // console.log(highValues);
  // console.log(loading);