import React from 'react'
import '../Styles/Stocks.css'
import { Link } from 'react-router-dom'
import val from '../Components/Data.js'
export default function Stocks({ticker_Name}) {
  const Data = val;
  const handleClick = (ticker)=>{
    ticker_Name(ticker);
  }
  return (
   <>
   <div className="stocks--main">
    {Data.map((ele,index) =>{
      return(
        <>
         <div className="card" key={index} style={{width:"16rem",backgroundColor:"transparent"}}>
         <img src={ele.image} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title" style={{color:"rgb(132, 132, 255)"}}>{ele.Name}</h5>
         <p className="card-text">{ele.Info}</p>
         <Link to={'/graphs'} className="btn btn-dark ticker--btn" onClick={()=>handleClick(ele.ticker)}>Check it Out</Link>
         </div>
         </div>
        </>
      )
    })

    }
   </div>
   </>
  )
}
