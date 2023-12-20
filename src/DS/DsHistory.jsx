import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DsStyle.css';

const History = () => {
    return (
<div>

  <div className="sidebar">
    <ul>
      <li></li>
      <li><Link to="/worldMap">World Map</Link></li>
      <li><Link to="/observers">Observers</Link></li>
      <li><Link to="/void">The Void</Link></li>
      <li><Link to="/timePassage">Time Passage</Link></li>
    </ul>
  </div>

  <div className="topbar">
    <h1>History</h1>
  </div>

  <div className="containerObserver">
    <div className="Historybox">
      <table>
        <thead>
          <tr>
            <th className="narrow-column">Year</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Year ??? BDE</td>
            <td>Death came into existance. He alone had the power to control where the souls of the dead go. Soon after, Famine and Pestilence birth when the first famine is felt
              and the first disease is formed. Since all three are born of nature's laws, they cannot interfere with the universe.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Once the first caveman used hard work to accomplsih something, Divine Diligence is born on a distant world. Simuleniously, Divine Sloth is born in another world
              close to the first. Soon after, as humans on earth begin to feel more emotions, more Divines are created. In order after the first two: Wrath and Patiance,
              Envy and Kindness, Gluttony and Temperance, Greed and Charity and finally, Lust and Chastity. Since they are born of human nature, they are phisical and can interect with the universe.
              Death disides to make human souls arrive in their worlds so the divines could offer them a proper afterlife. 
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>As humans begin fighting each other in large numbers, another being is born - both divine and observer, War. Being half of both, he can see all, has extreme power and can interect with the universe.
              He forces a part of himself on the other three observers, giving them form, even if in a weaker sense than himself. Death still wishes to maintain their non-interfearance on the phisical world but both War and Famine disagree.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>War heads to the Divine worlds where the population has grown immensly. Exploring Gehenna, he finds an abandoned soul of a child. 
              Thinking it amusing, he reforms the child's body, making him a dragon and giving him the magic of darkness, magic that consumes the others and can give life to the unlliving. 
              He gives him complete freedom and also names the child - Abaddon. 
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Over time, the Divines learned many things from the human souls and gave themselves names. Meanwhile, a second human world is discovered quite close to the divine worlds.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>A seventh virtue, Divine Humility is born. Unbeknowst to anyone, a seraphim is born from Divine Diligence's pride at the same time.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Believing himself superiour, Lucifer insulted and challanged Divine Dilligence. However, in any category they competed, he came short and was banished from Elyssium and sent to Gehenna. He was meant to die
              but was found by Sathania who decided to give the angel a chance. She struck a deal with him - he helps them ruin the reputation of the second human world and he'll get to live, even become a king of Gehenna.
              With the assistance of Divine Envy and Divine Lust, he succeds. Divine wrath keeps her promise and lets him stay. Lucifer becomes Divine Pride.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Divine Pride informs the other Divines of Elyssium's location. The Elyssium - Gehenna war begins.</td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Divine Humility and Divine Pride clash.  It releases an enourmous amount of energy which cuminates in
              Gehenna, Envy's land and gives birth to a soulles being with only ego. Using unique powers, he conquers and occupies one of Envy's forts. 
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>Trying to end the war, Divine Dilligence struck a deal with Divine Greed. He will give greed new gravity magic if he uses it to contain Lucifer in Gehenna.
               Divine Greed agrees but, suspicious, asks for the deal to be struck a few days later. During those few days, Divine Greed splits his soul in two.
              He uses one of his halves to meet Divine Diligence and complete the deal. Thus, he seals Divine Pride in Gehenna.
            </td>
          </tr>
          <tr>
          <td>Year ??? BDE</td>
            <td>During the forced cease-fire, Divine Envy asks Divine Lust if he could help take care of her "problem". He tried to retake the fort, occupied by the new creature but returned 
              unsuccesful. He recommended Envy leave him alone as the creature seemed unvilling to leave.
            </td>
          </tr>
          <tr>
          <td>Year 52 BDE</td>
            <td>Divine Envy pretends to be Divine Pride and convinces a cupid, Nova to rebel against Elyssium. After his attempt is discovered,
              he is banished to the edges of the cosmos to starve without "SOMETHING". However, before that happens, famine finds him and taking pity, fuses with him, creating Nova Fames.
            </td>
          </tr>
          <tr>
            <td>Year 50 BDE</td>
            <td>Nova locates earth, but before he can destroy it, Adam appears and tells Nova how to find Elyssium and Gehenna, after which Nova leaves. Before he can even relax, The Fourth Doomsday Star kills him.
            Then, realising what Adam's actions caused, he used the power of wrath's axe to blow up the sun, destroying earth. Then he begins his journey to Elyssium and Gehenna. At the last possible, moment
            those earthlings who wore special talismans, disappear.</td>
          </tr>
          <tr>
            <td>Year 30 BDE</td>
            <td>All who wore the talismans finally arrived in Uniondi. They get granted blessings as compensation.</td>
          </tr>
          <tr>
            <td>Year 25 BDE</td>
            <td>An earthling named Adam tricked a vampire princess. Then, sold out her people at which point, excluding her, they all get massacred.</td>
          </tr>
          <tr>
            <td>Year 23 BDE</td>
            <td>Abaddon looks for Adam because of his blessing, stronger than all others -<i>"Equilizer."</i> He convinces him to come to his side and Adam, bored as he was, complied.</td>
          </tr>
          <tr>
            <td>Year 20 BDE Winter's eve</td>
            <td>Nova arrives but before attacking Elyssium, Abaddon approaches him and recruits him for his plan.</td>
          </tr>
          <tr>
            <td>Year 20 BDE Summer's peak</td>
            <td>Gehenna and Elyssium get plunged into the void and the fourteen divines come to Uniondi. They quickly conquer humanity's hearts and begin building the 14 divine countries. Abaddon, Nova and Adam also come but they only rest, expecting their fights to have ended.</td>
          </tr>
          <tr>
            <td>Year 19 BDE</td>
            <td>The divines begin breeding with the humans to create descendants. A strange being, War, approaches each of them and offers a deal - surrender their power to him and he'll return the eternity they once possessed.</td>
          </tr>
          <tr>
              <td>Year 10 BDE</td>
              <td>They all eventually surrendered their power and War, using it, remade uniondi and made the divines into deities. He also gave them the power to create blessings.
              War manipulated two people. 1. Adam to leave 
              Uniondi by telling of a way to turn back time and save earth. 2. Nova to ask Divine Pride about who convinced him to start a rebellion. Divine Pride tells him of a power, Divine Envy possesses - shapeshifting.</td>
          </tr>
          <tr>
              <td>Year 9 BDE</td>
              <td>Nova kills Lurana, the Divine Envy. This action sparks distrust between the others. </td>
          </tr>
          <tr>
              <td>Year 7 BDE</td>
              <td>Eventually, the Divines begin killing each other.</td>
          </tr>
          <tr>
              <td>Year 3 BDE</td>
              <td>Abaddon finds their battles unacceptable and decides it would be best to purge all of them. The Doomsday Star lights the sky for the first time. Beginning with the angel continents, he kills 
              Gabriel, Divine Patience and Remiel, Divine Kindness.</td>
          </tr>
          <tr>
              <td>Year 2 BDE</td>
              <td>Abaddon kills Raphael, Divine Charity, and Sariel, Divine Chastity.</td>
          </tr>
          <tr>
              <td>Year 1 BDE</td>
              <td>Seeing no other way, Death joins with a human, David, in order to defeat Abaddon.</td>
          </tr>
          <tr>
              <td>Year 1</td>
              <td>Following Abaddon's defeat, David Mors defeats Nova Fames. In return for keeping his life, with the united help of death and pestilence, Nova seals War within the Void. Imeadately after, fearing being tricked, he flees Uniondi. </td>
          </tr>
          <tr>
              <td>The First Era</td>
              <td><b>The First Doomsday Star has died.</b></td>
          </tr>
          <tr>
              <td>Year 201</td>
              <td>Abaddon chooses an elf, Robin, as the second Doomsday Star and is reborn.</td>
          </tr>
          <tr>
              <td>Year 203</td>
              <td>The Vampire princess is chosen as Patiance's first Ruler.</td>
          </tr>
          <tr>
              <td>Year 222</td>
              <td>Robin fights and kills Divine Sloth, the keeper of all secrets.</td>
          </tr>
          <tr>
              <td>Year 222</td>
              <td>Divine Gluttony and Divine Temperance attack Robin because he locates forbidden knowledge and manage to wound him before themselves being killed. 
                Believing that Greed's death was caused by him, Divine Wrath murders him.</td>
          </tr>
          <tr>
              <td>The Second Era</td>
              <td><b>The Second Doomsday Star has died.</b></td>
          </tr>
          <tr>
              <td>Year 234</td>
              <td>Hephaestus arrives in Uniondi and gets chosen as the first Ruler of Sloth. He chooses to abandon his duty and wanders the world.</td>
          </tr>
          <tr>
              <td>Year 236</td>
              <td>Divine Lust conquers Acedia. In reaction to this, Divine Humility convince the Rulers of temperance and kindness to unite and turn their three nations into one republic.</td>
          </tr>
          <tr>
              <td>Year 422</td>
              <td>Robin chooses a merwoman, Mira, as the third Doomsday Star and after rebirth, hides in Gula.</td>
          </tr>
          <tr>
              <td>Year 423</td>
              <td>Divine Pride hires Mira as his bodyguard.</td>
          </tr>
          <tr>
              <td>Year 440</td>
              <td>Divine Pride and Divine Humility have a nephilim child, Astrum. Mira, becomes his bodyguard.</td>
          </tr>
          <tr>
              <td>Year 458</td>
              <td>During his adulthhood ceremony, Astrum Superbia finds out he's a nephilim.</td>
          </tr>
          <tr>
              <td>Year 459</td>
              <td>Mira is lured away from Superbia and both, Divine Pride was murdured and Astrum gravely wonded. Once she discovered that, MIra hid him inside one of her secret forts in the dragonidum mountains.</td>
          </tr>
          <tr>
              <td>Year 460</td>
              <td>Mira goes on a rampage, believing the divines as guilty. She kills Michael, Divine Pride. Then challanges the rest to a battle on the dragonidum mountains. Sathania, Divine Wrath goes ahead and meets her end as she is frozen within the eastern ocean, alongside the ocean itself. Finally, Divine Lust and Divine Humility fight her. Asmodeus, Divine Lust and Mire strike each other down. Divine Humility survives.</td>
          </tr>
          <tr>
              <td>The Third Era</td>
              <td><b>The Third Doomsday Star has died.</b> </td>
          </tr>
          <tr>
              <td>Year 460</td>
              <td>Divine Lust's last child becomes the first Ruler of Lust, even though a baby.</td>
          </tr>
          <tr>
              <td>Year 503</td>
              <td>The first Ruler of Lust gets killed by his eldest son, who becomes the second Ruler of Lust. Then, he kills his siblings and mother.</td>
          </tr>
          <tr>
              <td>Year 580</td>
              <td>Angela is born.</td>
          </tr>
          <tr>
              <td>Year 598</td>
              <td>Malum Valentine, The ??? Doomsday Star finds and murders Adam. Moments later, Divine Humility kills Malum.</td>
          </tr>
          <tr>
              <td>Year 600</td>
              <td>Divine Humility suffers a poisoning attack and almost dies. However, her maid, Angela, strikes a deal with Pestilence, who in return for curing Divine Humility, requests Angela to serve him for all time.</td>
          </tr>
          <tr>
              <td>Year 617</td>
              <td>The second Ruler of Lust dies in a battle against Aviratia. His Grandniece, Lilith, is chosen as the third Ruler of Lust.</td>
          </tr>
          <tr>
              <td>Year 732</td>
              <td>The first prince of Luxuria, Zayno Luxuria is born.</td>
          </tr>
          <tr>
              <td>Year 781</td>
              <td>The Second prince of Luxuria, Luca Luxuria is born. He is chosen as the second incarnation of Divine Lust.</td>
          </tr>
          <tr>
              <td>Year 800</td>
              <td>Mira chooses Luca Luxuria, a nephilim, as the Fourth Doomsday Star and escapes the fort after being reborn.</td>
          </tr>
          <tr>
              <td>Year 800</td>
              <td>David Mors makes his way to the center of the world and strikes down Luca Luxuria, while he's still a soul. This releases countles souls of the dead who fly across the world now. To avoid his death, Luca Luxuria meets and joins with Divine Vanity. War makes him, his eighth arbiter moments before Luca 
                enters an eighteen-year-long slumber.</td>
          </tr>
          <tr>
              <td>The Fourth Era</td>
              <td><b>The Fourth Doomsday Star has died.</b> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> 
    );
  }
  
export default History;