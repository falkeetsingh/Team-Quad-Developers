import React from 'react';
import img from '../assets/download.png'
import img1 from '../assets/download (1).png'

const Dashboard = ({ plotData }) => {
  
  return (
    <div className="outer">
      <div className="title">DASHBOARD </div>
      <div className="sidebar">sidebar
        <div className="sidebar-content">
          <a href="/Farm">Farm</a>
        </div>
        {/* <div className="sidebar-content">
          <a href="/Spline">Model</a>
        </div> */}
      </div>
      <div className="heatmap">
        <p>heatmap</p>
        <div className="image1">
          <img src={img1}></img>
        </div>
      </div>
      <div className="graph">
        <p>CO2 level tracking</p>
        <div className="image">
          <img src={img}></img>
        </div>
      </div>
      <div className="algae">
        <h4>algae</h4>
        <a href='https://en.wikipedia.org/wiki/Diatom'>Diatoms</a>
        <a href='https://www.britannica.com/science/blue-green-algae'>Blue-green algae</a>
        <a href='https://en.wikipedia.org/wiki/Red_algae'>Red algae</a>
        <a href='https://en.wikipedia.org/wiki/Green_algae'>Green algae</a>
        <a href='https://en.wikipedia.org/wiki/Green_algae'>Brown algae</a>
      </div>
    </div>
  );
};

export default Dashboard;

