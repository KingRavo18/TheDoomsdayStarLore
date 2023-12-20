import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DsStyle.css';

const ObserverPage = () => {
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
    <h1>The Observers</h1>
  </div>

  <div className="center">
    <h2 className="h2">Who are they?</h2>
      <p className="p">Beings born due to the world's laws. At first, they could not interfere, but that changed upon</p>
      <p className="p">the creation of the youngest - War, who was half a Divine, half an Observer. He shared a part of him with the others, giving them a tangible soul.</p>
      <p className="p">Still, unlike the last, the first three Observers could only interfere if they joined with mortal beings.</p>
      <p className="p">They agreed not to interfere, but War broke that promise, which forced the other three to do the same.</p>
      <h2 className="h2"> In Order of Birth.</h2>
  </div>
      
  <div className="containerObserver">
    <div className="Observerbox">
        <div style={{borderBottom: '1px solid rgb(0, 0, 0)'}}><h2>Death/David Mors</h2></div>
        
        <div style={{ display: 'flex' , textAlign: 'left'}}>
          <div style={{ width: '20%'}}>
            <ul>
              <li>Name: David Mors</li>
              <li>Race: Human</li>
              <li>Magic: None</li>
              <li>Birthday: 3rd of August, earth-year 2002 (67 as of year 1)</li>
              <li>Height: 191cm</li>
              <li>Traits: Short, gray hair and beard. Deep, old man wrinkles. A muscular phisique. Pale skin. Gray eyes. Usualy wears a black cloak. Wields two scythes, one to use as a normal weapon.
              The second is death's scythe which can destroy someone's soul upon contact. </li>
            </ul>
          </div>

          <div style={{ width: '80%', padding: '5px', borderLeft: '1px solid rgb(0, 0, 0)' }}>
            <p> Death was born when the first organism perished. It took charge as the leader of the others. 
              When Abaddon wreaked havoc on Uniondi, Death saw no choice but to join with a human named David to take Abaddon down.</p>
            <p><b>David Mors:</b></p>
            <p>He was born on Earth into a religious family, which made him wear a strange necklace. When he was a teen, the sun exploded, killing him. Thanks to the necklace, 
            he was transported to Uniondi. He lived a normal life for twenty years until Abaddon attacked.</p>
            <p>After sacrificing himself to save someone, he died but was reborn, having joined with Death. 
            Mors fought and eventually defeated Abaddon, and on Death's orders, told Nova Fames to seal Abaddon's creator, War, in the Void. 
            Since then, he was hailed as a hero and has lived peacefully. 
            He tried to start a family but found out he was immortal when they passed away.
            After the death of the Third Doomsday Star, he sealed her soul with Astrum Suberbia within a small fortress on the Dragonidum Mountains. 
            Soon after, he met a strange man, Malum, who told him to head to the center of the world on a specific date more than two hundred years in the future.</p>
            <p>David did know there was a sealed chamber deep within the earth. 
            The stranger told him that on this specific date, it would open to reveal a chance when David could destroy the Doomsday stars once and for all.
            As evidence for not spouting nonsense, the stranger offered the date when the First Ruler of Wrath would be chosen. 
            A few days before going to see what was there, David met the Ruler of Wrath, who he took under his wing as they seemed too young and inexperienced. 
            He told the Ruler to wait outside and headed down. 
            It turned out the stranger had spoken true, and David found the Fourth Doomsday Star, who seemed to have been chosen only a day or two earlier. 
            They faced off, and David won, piercing the spiritual body of the Doomsday Star with his scythe. 
            His soul ripped, releasing seemingly countless souls of the dead. 
            After managing to escape and returning to the Ruler of Wrath, he found three others with her: the Ruler of Sloth, his Wolf, the Third Doomsday Star reborn, and the same stranger who informed him of the date. 
            Upon inquiry, the stranger seemed just as confused about the event but refused fault. 
            Seeing no choice, David Mors asked if he could take Divine Wrath from the Ruler, who agreed if David still took them under his wing. 
            David agreed and became the first Ruler of Wrath.
            </p>
          </div>
        </div>  
    </div>

    <div className="Observerbox">
        <div style={{borderBottom: '1px solid rgb(0, 0, 0)'}}><h2>Famine/Nova Fames</h2></div>

        <div style={{ display: 'flex' , textAlign: 'left' }}>
          <div style={{ width: '20%'}}>
            <ul>
              <li>Name: Nova Fames</li>
              <li>Race: Cupid</li>
              <li>Magic: Wind</li>
              <li>Birthday: ???</li>
              <li>Height: 171cm</li>
              <li>Traits: Curly, black hair. No facial hair. Looks young, about fifteen. A tatoo of a black hole on his neck. Thin phisique. Magenta eyes. Black wings grow on his back.</li>
            </ul>
          </div>

          <div style={{ width: '80%', padding: '5px', borderLeft: '1px solid rgb(0, 0, 0)' }}>
            <p>Born from the first organism to famish. Found a cupid named Nova. Following War’s example, he joined with Nova.
            <p><b>Nova Fames:</b></p>
            Once a resident of earth but died a child and remembers little of his time there. After Divine Envy tricked him by maskerading as Divine Pride, he
            tried to organise a rebellion on Ellysium, but was quickly found out and cast to the depths of the cosmos.
            After Famine joined with him, he became Nova Fames. He wished for revenge and began making his way back. However, found earth,
            the planet Divines loved. He threteaned to destroy it if the divine virtues didn't face him.
            No one answered. He planned to cast Earth into the Sun but stopped when a strange human, Adam, appeared and told him how to find his way back to Elyssium, using the soul canal.
            Feeling sympathy for his pleas, Nova left.</p>
            <p>It took twenty years but he found his way back. But before he could attack, Abaddon aproached and convinced him to wait
            so they could fight together. They were joined by a strange human, Adam.
            Adam seemed familiar to Nova, but he didn't questions him.
            Together, they plunged both Gehenna and Elyssium into the Void.
            After going to Uniondi, he met the real Divine Pride who explained the truth of what happened. Nova was so enraged, he murdured Divine Envy.</p>
            <p>Only a few years later, David Mors bested him as punishment for his actions 
            but Nova could keep his life if he trapped something called War within the Void.
            After doing so, Nova vanished, fearing that David was lying about sparing him and has not been seen since of Uniondi.
            </p>
          </div>
        </div>
    </div>

    <div className="Observerbox">
        <div style={{borderBottom: '1px solid rgb(0, 0, 0)'}}><h2>Pestilence/Angela Pestis</h2></div>

          <div style={{ display: 'flex' , textAlign: 'left'  }}>
            <div style={{ width: '20%'}}>
              <ul>
                <li>Name: Angela Pestis</li>
                <li>Race: Fairy</li>
                <li>Magic: Lightning</li>
                <li>Birthday: 11th of spring's peak, year 580.</li>
                <li>Height: 159 cm</li>
                <li>Traits: Long, yellowy-green hair. Short stature. Freckled face. Faded, green eyes. Butterfly-like wings growing from her back.</li>
              </ul>
            </div>
            <div style={{ width: '80%', padding: '5px', borderLeft: '1px solid rgb(0, 0, 0)' }}>
              <p>Pestilence was born from the first organism to become deseased. Stayed loyal to Death's order of non-interferance far longer than death himself but chose to join with someone when it seemed neccasary.</p>
            <p><b>Angela Pestis:</b></p>
            <p>A fairy born into the nobility of humilitas. Worked her way up and became the Divine Humility's maid. However, days after Uriel slew the black dragon, she grew deathly ill. (Poisoned by War's Arbiters)
              Since she was the last living divine panic rose and spread. On one of her Divine Humility's last days, she ordered everyone to leave her and calm the citisens, all but Angela.
              Though, only serving Uriel, she prayed for someone to save her. Someone answered and requested eternal servitude for granting the power to heal her Lady. Angela accepted and joined with Pestilence.
              After curing Divine Humility, she left her service. Now, she wanders the world and has created a great information network. From that network, she follow's pestilences orders, whether ordered to save, kill or destroy.
            </p>
            </div>
          </div>
        </div>
        <div className="Observerbox">
        <div style={{borderBottom: '1px solid rgb(0, 0, 0)'  }}><h2>War</h2></div>
        <div style={{  textAlign: 'left'  }}>
        <p>War was born from the time when humans began waging war. Since war is both a factor of the world's and human nature, he was born both a divine and an observer. This let him see anything anywhere and be able to phisically interfere.
          He forces a part of himself to his the other observers who ganied a semi-phisical form. After leaving them, he found a faint demon, unfit to be of any blood. Seeing an opportunity, War bestowed a part of himself to the demon and offered
          a name - Abaddon. Then, he left permitting Abaddon do as he pleases.</p>
          <p> After the fourteen Divines arrived in Uniondi and realised they lost their immortality, War offered a deal. In return for a bit of their divine power, War would reinstate their immortality but on the condition
            that over half of the divines have to agree. It took a few years but it happened, so War took root into the world and became its creator. He made the fourteen immortal and reinstated the blessing system and entering the void, made it last living being, Vanitas an examiner with 
            the false promise of eventual escape.</p>
<p> After Abaddon was struck down, War was imprisoned within the very void, cast by Nova Fames, with chains made by the other observers. There he met Vanitas once more who was diligentely doing his duty. War realised, he couldn't do much without Vanitas. When Vanita's made contact with him, his power was turned into a blessing which
  qould rip blessing from people's souls. 
        </p>
        <p> After about two centuries, Abaddon was revived and some time later, arrived in the void where both Abaddon and War reunited. Since they had similar ambitions, they teamed. Abaddon become the First arbiter of War. Afterwards, he left thruogh a mandala made by a ruler, which caused a sudden confusion for a little while.
          From that time, others who arrive in the void sometimes express hatred for the divines and become Arbiter's of War. <p/>
          <p>Eventually, the fourth Doomsday Star arrived, having been pierced by Death's scythe. He made up and joined with Vanitas. War deemed him to be perhaps worthy to control Vanity. Thus, was reborn Luca Vaingloria, Ruler of Vanity and Eight Arbiter of War</p>
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ObserverPage;