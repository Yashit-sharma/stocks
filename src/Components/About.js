import React from 'react'
import '../Styles/About.css'
export default function About() {
  return (
    <>
    <div className="about--main">
        <div className="animate__animated animate__fadeInRight trade--img">
        <img src='Images/stocks.webp' alt="" />
        </div>
        <div className="animate__animated animate__fadeInLeft about--text">
          <ul style={{paddingLeft:"0px"}}>
        <p><span style={{color:"rgb(132, 132, 255)",fontSize:"20px"}}>Trade Smart</span> is your go-to platform for reliable and intuitive stock data analysis. We provide a comprehensive suite of tools and visualizations, designed to help you make informed investment decisions and stay updated with the latest market trends.
        </p>
        <p>
        <span style={{color:"rgb(132, 132, 255)",fontSize:"20px"}}>Interactive Charts: </span>Our app offers dynamic and interactive charts that allow you to visualize stock data, track market trends, and make informed investment choices.
        </p>
        <p>
        <span style={{color:"rgb(132, 132, 255)",fontSize:"20px"}}>Real-Time Updates: </span>Stay up-to-date with real-time stock market updates and live data feeds, ensuring that you have the most recent information at your fingertips.
        </p>
        </ul>
        </div>
    </div>
    </>
  )
}
