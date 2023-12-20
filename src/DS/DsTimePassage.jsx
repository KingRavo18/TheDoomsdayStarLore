import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DsStyle.css';

const TimePassage = () => {
    return (
<div>

  <div className="sidebar">
    <ul>
      <li></li>
      <li><Link to="/">History</Link></li>
      <li><Link to="/worldMap">World Map</Link></li>
      <li><Link to="/observers">Observers</Link></li>
      <li><Link to="/void">The Void</Link></li>
      <li><Link to="/timePassage">Time Passage</Link></li>
    </ul>
  </div>
  <div className="topbar">
    <h1>Passage of Time</h1>
  </div>
  <div className="center"> 
    <h2 style={{padding:"15px", color:"white"}}>Details</h2>
    <p className="p">A contained area, covered in complete darkness, which is seperate from any existing place in the cosmos.</p>
</div>
  <div className="containerObserver">
    <div className="Historybox" style={{ backgroundColor: "#F0F8FF"}}>
      <table>
        <thead>
          <tr>
            <th className="narrow-column">Month</th>
            <th className="narrow-column">Amount of days</th>
            <th>Notable days</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Spring's dawn</td>
            <td>31</td>
            <td>The new year is celebrated on 1st of Spring's dawn, the day when the first Doomsday Star was defeated.</td>
          </tr>
          <tr>
          <td>Spring's peak</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Spring's dusk</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Summer's dawn</td>
            <td>31</td>
            <td></td>
          </tr>
          <tr>
          <td>Summer's peak</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Summer's dusk</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Autumn's dawn</td>
            <td>31</td>
            <td></td>
          </tr>
          <tr>
          <td>Autumn's peak</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Autumn's dusk</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Winter's dawn</td>
            <td>31</td>
            <td></td>
          </tr>
          <tr>
          <td>Winter's peak</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
          <td>Winter's dusk</td>
            <td>29</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> 
    );
  }
  
export default TimePassage;