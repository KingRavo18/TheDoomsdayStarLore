import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DsStyle.css';
import Uniondi from './MapDoomsdayStar.png';

const UniondiMap = () => {
  return (
    <div>
      <div className="sidebar">
      <ul>
        <li></li>
        <li><Link to="/">History</Link></li>
        <li><Link to="/worldMap">World Map</Link></li>
        <li><Link to="/observers">Observers</Link></li>
        <li><Link to="/void">The Void</Link></li>
      </ul>
      </div>
      <div className="topbar">
        <h1>Uniondi</h1>
        <p style={{ padding: '5px' }}>The world map of <i>The Doomsday Star.</i></p>
      </div>
      <div className="center2">
        <img src={Uniondi} useMap="#workmap" alt="Map-Uniondi" className="rotate-90" />
      </div>
    </div>
  );
};

export default UniondiMap;




