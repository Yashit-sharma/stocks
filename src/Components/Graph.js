import React from 'react'
import '../Styles/Graph.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
export default function Graph({symbol}) {

  const [HighValues, setHighValues] = useState([])
  const [TickerData, setTickerData] = useState([])
  const [loading, setlaoding] = useState(false)
  const [loading2, setloading2] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        interval: '5min',
        function: 'TIME_SERIES_MONTHLY_ADJUSTED',
        symbol: symbol,
        datatype: 'json',
        output_size: 'compact'
      },
      headers: {
        'X-RapidAPI-Key': 'a36c13e5famsh03773c8b92219ecp1560b0jsn3782d71f1b92',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
    const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const stockData = response.data['Monthly Adjusted Time Series'];
        const extractedHighValues = Object.values(stockData).map(item => parseFloat(item['2. high']));
        const newArray = extractedHighValues.slice(0,12).reverse()
        setHighValues(newArray);
        setlaoding(true);
        console.log("API hit")
    } catch (error) {
      seterror(true);
      console.error(error);
    }
  };

const options2 = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    function: 'GLOBAL_QUOTE',
    symbol: symbol,
    datatype: 'json'
  },
  headers: {
    'X-RapidAPI-Key': 'a36c13e5famsh03773c8b92219ecp1560b0jsn3782d71f1b92',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};
// eslint-disable-next-line
const fetchInfo = async () => { try {
	const response = await axios.request(options2);
  const dataArray = Object.entries(response.data['Global Quote']).map(([key, value]) => ({ key, value }));
  dataArray.splice(-1,1);
	setTickerData(dataArray);
  setloading2(true);
  console.log("API hit")
} catch (error) {
  seterror(true);
	console.error(error);
}
}
  fetchData();
  fetchInfo();
  // eslint-disable-next-line
  }, [Symbol])

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const getCurrentMonth = () => {
    const now = new Date();
    return now.getMonth();
  };
  const generateXAxisLabels = () => {
    const currentMonthIndex = getCurrentMonth();
    const xAxisLabels = [];
    for (let i = 0; i < 12; i++) {
      const index = (currentMonthIndex - i + 12) % 12;
      xAxisLabels.unshift(months[index]);
    }
    return xAxisLabels;
  };
  const option = {
    chart: {
      backgroundColor: 'black',
    },
    title: {
      text: 'Stock High Points Throughout the Year',
      style: {
        color: 'white',
      },
    },
    xAxis: {
      categories: generateXAxisLabels(),
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      gridLineColor: 'transparent',
      title: {
        text: 'Price',
        style: {
          color: '#ffffff',
        },
      },
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    series: [
      {
        name: 'High Price',
        data: HighValues,
        color : "rgb(132, 132, 255)",
      },
    ],
  };

  return (
   <>
    {loading && loading2 ? 
    <>
    <div style={{position:"relative",top:"20vh"}}>
    <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
    <div className="data--container">
       { 
       TickerData.map((ele)=>{
        return(
          <>
        <div className="data">
          <span className='data--header' style={{color:" rgb(132, 132, 255)",fontSize:"22px"}}>{ele.key}</span>
          <span>{ele.value}</span>
        </div>
        </>
        )})
       }
    </div>
    </>
    :  !error && !loading && !loading2 ?
    <div className="loader" style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",top:"48vh"}}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    : ""
    }
    {
      error ? <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",top:"48vh", fontSize:"22px"}}><p>API LIMIT REACHED</p><p>(WAIT 2 MINUTE)</p></div> : ""
    }
   </>
  )
}
