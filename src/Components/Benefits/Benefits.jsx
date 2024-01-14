import React from 'react';
import "./benefits.scss";
import girl from "../../assets/girl.PNG";
import back from "../../assets/back-desktop.png";
import front from "../../assets/front-desktop.png";
import handphone from "../../assets/phone-in-hand-desktop.webp";
import moments from "../../assets/moment-desktop.jpg";
import virtual from "../../assets/virtual-cards-desktop.jpg";
import rewards from "../../assets/rewards-desktop.jpg";
import support from "../../assets/support-chat-desktop.jpg";
import wallet from "../../assets/wallet-desktop.jpg";
import traveldesktop from "../../assets/travel-desktop.webp";
import travel from "../../assets/travel.webp";

const Benefits = () => {
  return (
    <div className='benefits'>
        <div className='image-wrapper' id='travel'>
            <img className='desktopphoto' src={traveldesktop} alt="traveldesktop"/>
            <img className='mobilephoto'src={travel} alt="travel"/>
        </div>
        <p>BESPOKE FLIGHT BENEFITS, INSIDE ATLAS APP.</p>
        <div className='list-benefits'>
            <div className='list'>
            <h1>5x points with<br/>BLADE³</h1>
            <h2>Exclusive reward for Atlas cardholders on<br/> all BLADE helicopter rides and flights.</h2>
            </div>
            <div className='list'>
            <h1>CLEAR Plus<br/>membership⁴</h1>
            <h2>Fast forward through airport security with<br/> included CLEAR Plus annual membership.</h2>
            </div>
            <div className='list'>
            <h1>Cancel flights<br/>without fees⁵</h1>
            <h2>Change or cancel any flight, at any time, for<br/> any reason and get fees reimbursed up to<br/> $600 a year.</h2>
            </div>
        </div>
        <h1>+</h1> 
        <h3>Visa Infinite Benefits⁶</h3>
        <h4>Priority Pass, Luxury Hotel Collection,<br/>
        no foreign transaction fees, and more.</h4>
        <button>Discover</button>
        <div className='girl-photo' id="card">
           <img src={girl} alt="girl"/>
           <p>THE WORLD IN YOUR HAND, WITH ATLAS CARD.</p>
           <h1>Head Turner</h1>
           <h2>Designed to shatter the norm.</h2>
           <h3>
           Atlas is crafted to mirror our uncommon obsession with every single detail, always in pursuit of elevating you above the crowd, while also enhancing your privacy.
           </h3>
        </div>
        <div className='two-cards'>
            <div className='card1'>
                <img src={front} alt="front"/>
            </div>
            <div className='card2'>
                <img src={back} alt="back"/>    
            </div>
        </div>
        <p>DESIGNED AND ENGINEERED, FRONT TO BACK.</p>
        <div className='list-benefits'>
            <div className='list'>
            <h1>Advanced<br/>construction</h1>
            <h2>Made from 21 grams of high density steel, CNC-milled and engraved, then polished to a brilliant mirror finish that is unlike any card.</h2>
            </div>
            <div className='list'>
            <h1>Enhanced<br/>privacy</h1>
            <h2>With no visible card number on its surface, Atlas keeps your privacy where it belongs, in your own hands.⁷</h2>
            </div>
            <div className='list'>
            <h1>Personalized<br/>for you</h1>
            <h2>Designed front to back, Atlas card features tone-on-tone graphics and a personal icon of your choice by your name.</h2>
            </div>
        </div>
        <div className='text'>
        <h1 className='power' id="app">Power Couple</h1>
        <h2 className='dynamic'>A dynamic duo of card + app.</h2>
        <h2 className='conceived'>Each conceived from the same first principles, Atlas shines with a true native app that raises the bar, from magical rewards to unlimited cards, and everything in between.</h2>
        </div>
        <div className='image-wrapper' id="handphone">
            <img src={handphone} alt="handphone"/>
        </div>
        <p>FAR ABOVE THE TYPICAL APP EXPERIENCE.</p>
        <div className='list-benefits'>
            <div className='list'>
            <h1>Dynamic<br/>rewards⁸</h1>
            <h2>Get automatically upgraded to 3x points where you spend the most, plus 1x points on every purchase. Because there's more to a rewarding life than chasing points.</h2>
            </div>
            <div className='list'>
            <h1>Unlimited<br/>virtual cards⁹</h1>
            <h2>Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea.</h2>
            </div>
            <div className='list'>
            <h1>Intuitively<br/>powerful</h1>
            <h2>Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out.</h2>
            </div>
        </div>
        <div className='photos'>
            <div className='photo'>
                <img src={moments} alt="photo1"/>
                <p>YOUR PURCHASES, REIMAGINED AS MOMENTS.</p>
            </div>
            <div className='photo-group'>
                <div className='photo-detail'>
                    <img src={virtual} alt="photo2"/>
                    <p>CREATE AND MANAGE VIRTUAL CARDS.</p>
                </div>
                <div className='photo-detail'>
                    <img src={rewards} alt="photo3"/>
                    <p>POINTS UPGRADES, WITH DYNAMIC REWARDS.</p>
                </div>
            </div>
        </div>
        <div className='text'>
        <h1 className='power' id="concierge">Truly Personal</h1>
        <h2 className='dynamic'>At your beck and call (or text).</h2>
        <h2 className='conceived'>Experience handcrafted support, with your own dedicated personal advisor who is on hand to fulfill any request, from last-minute dinner plans to deep dive sessions.</h2>
        </div>
        <div className='image-wrapper' id='color'>
            <img src={support} alt="support"/>
        </div>
        <p>FAR ABOVE THE TYPICAL APP EXPERIENCE.</p>
        <div className='list-benefits'>
            <div className='list'>
            <h1>Dynamic<br/>rewards⁸</h1>
            <h2>Get automatically upgraded to 3x points where you spend the most, plus 1x points on every purchase. Because there's more to a rewarding life than chasing points.</h2>
            </div>
            <div className='list'>
            <h1>Unlimited<br/>virtual cards⁹</h1>
            <h2>Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea.</h2>
            </div>
            <div className='list'>
            <h1>Intuitively<br/>powerful</h1>
            <h2>Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out.</h2>
            </div>
        </div>
        <div className='image-wrapper' id='width'>
            <img src={wallet} alt="wallet"/>
        </div>
        <p>YOUR COMPANION THROUGH EVERY ADVENTURE.</p>
    </div>
  )
}

export default Benefits