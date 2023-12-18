import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DsStyle.css';

const Void = () => {
  return (
    <div style={{ color:"white"}}>

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
        <h1>The Void</h1>
        <p style={{padding:"5px"}}>Also known as <i>The Eternal Prison</i> and <i>The Afterlife.</i></p>  
      </div>

      <div className="center"> 
    
    <h2 style={{padding:"15px"}}>What is it?</h2>
    <p className="p">A contained area, covered in complete darkness, which is seperate from any existing place in the cosmos.</p>
    <p className="p">Special beings are inprisoned here. They are not permitted to leave but an exit is created when David Mors drives a scythe through The fourth Doomsday Star.</p>
    <p className="p">This is because the Void is hidden within the Doomsday Stars. They gather power by filling it with souls of the dead. </p>
    <p className="p">The only way to normally get here is using demon teleportation mandalas, which can only be cast using the demon keys.</p>

    <h2 style={{padding:"15px"}}>Origin</h2>
    <p>An area created by Nova Fames, using the power of Famine to destroy Gehenna and Elyssium. </p><p> As punishment for doing so, in year 1
    Death and Pestilence order him to isolate the space and inprison War inside.</p>

</div>
<div className="center"> 
    <h2 style={{padding:"15px"}}>What is located here?</h2>
</div>
<div className="container">
    <div className="box"><h3>Vanitas Vaingloria</h3>
       <p style={{padding:"15px"}}>  The Divine Vanity. The eight divine sin left behind by the others after they left.
        He was sealed within the void but survived because of his immortality.
        War gave him the job as the examiner for future demons and demon Rulers.
        To accomplish this job, War gave him every power of the seven sins and every demon key that had not been claimed.</p>
        <p> Vanitas joins with Luca Luxuria, turning him into the Ruler of Vanity. With slight help from War, they escape.</p>
    </div>
    <div className="box"><h3>Gehenna and Elyssium.</h3>
    <p style={{padding:"15px"}}>Gehenna is the homeworld of the eight Divine sins. Elyssium is the homeworld of the seven Divine virtues.
        It once worked as an afterlife for the dead but Nova Fames plunged both of them into the void. 
    </p><p>Gehenna's nature:</p><p>Split in seven different kingdoms, water, air, earth, fire, black forest, spirit world, and a land of eternal storms. Most people arrive in the land of water, where Vanitas lives.</p><p>
      The sky was eternally black, with stars visible all day long. Even still, the sun illuminated the land.
    </p>
</div>
<div className="box"><h3>Souls of the Dead</h3>
    <p style={{padding:"15px"}}>Every soul who has ever died finds its way here. Originally, this job was meant for Gehenna and Elyssium 
        but ever since they were plunged into the void, it took the job. Normally, souls sink into slumber and fade away
        but very regretful souls hold onto existance. 
        Unbeknownst to the anyone, War trapped 50000 souls from earth here. </p>
        <p>All of these souls are released into the world when David Mors kills the Fourth Doomsday Star.
    </p>
</div>
    <div className="box"><h3>War</h3>
    <p style={{padding:"15px"}}> Youngest of the four observers. He influenced Abaddon, took power from the fourteen divines and remade the world
        to his liking. As this was a crime against the observer order of non-interfearance, the others
        sealed him within the void, where he could not directly interfere. However, he can still see
        what happens and can speak to special people who have visited the void and have been selected as <i>Arbiters of War.</i></p>
        <p>War selects Luca Luxuria as the 8th Arbiter of War, believing him to have the potential to release him using Vanitas's power.</p>
</div>
</div>
    </div>
  );
};

export default Void;