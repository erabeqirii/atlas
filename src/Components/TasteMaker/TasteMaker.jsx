import React from 'react';
import "./tastemaker.scss"
import horse from "../../assets/supper-club-desktop.jpg"
import photo1 from "../../assets/horses-desktop.jpg";
import photo2 from "../../assets/felix-desktop.jpg";
import photo3 from "../../assets/cucina-desktop.jpg";


const TasteMaker = () => {
  return (
    <div id='dining' className='tastemaker'>
        <h1>Taste Maker</h1>
        <h2>Meet Atlas Supper Club.</h2>
        <h2 className='tastemaker-text'>Skip past the endless waitlists and concierge calls that turn up empty handed. 
            With Atlas, you have a seat at the table at today's most desirable restaurants.</h2>
        <div className='image-wrapper'>
            <img src={horse} alt="horse"/>
        </div>
        <div className='list-tastemaker'>
            <div className='list'>
            <h1>Dedicated <br/>reservations¹</h1>
            <h2>Access exclusive inventory at our<br/> restaurant partners including – Horses,<br/> Felix Trattoria, Cucina Alba, and more.</h2>
            </div>
            <div className='list'>
            <h1>Last-minute <br/>bookings²</h1>
            <h2>With bookings available at short notice,<br/> you won't find yourself on a waitlist.</h2>
            </div>
            <div className='list'>
            <h1>Access during <br/>peak hours</h1>
            <h2>Members get seated at prime time, when <br/>availability is typically the hardest to get.</h2>
            </div>
        </div>
        <div className='photos'>
            <div className='photo'>
                <img src={photo1} alt="photo1"/>
                <p>HORSES, LA, ON ATLAS SUPPER CLUB.</p>
            </div>
            <div className='photo-group'>
                <div className='photo-detail'>
                    <img src={photo2} alt="photo2"/>
                    <p>FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.</p>
                </div>
                <div className='photo-detail'>
                    <img src={photo3} alt="photo3"/>
                    <p>CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default TasteMaker;