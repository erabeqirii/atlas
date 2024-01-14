import React from 'react';
import "./executive.scss";

const Executive = () => {
  return (
    <div className='executive' id="atlas">
        <h1>Executive, brief.</h1>
        <h2>Your next journey begins here.</h2>
        <h2>With all the essentials you need out in the world, and nothing to limit your possibilities, here is everything Atlas has to offer.</h2>
        <div className='list-executive'>
            <div className='list'>
                <h3>Dining</h3>
                <p>Exclusive reservations with Atlas Supper Club</p>
                <p>Dedicated tables at partner restaurants</p>
                <p>Last-minute bookings</p>
                <p>Peak hours access</p>
                <h3>Rewards & Benefits</h3>
                <p>3x upgrade on top spending category</p>
                <p>1x points on every purchase</p>
                <p>One Medical membership¹¹</p>
                <p>Erewhon Cafe membership¹²</p>
                <p>FUTURE fitness training membership¹³</p>
                <h3>Card</h3>
                <p>Charge card with no pre-set spending limits¹⁴</p>
                <p>21 gram steel alloy, milled, engraved, and polished to a brilliant mirror shine</p>
                <p>Tone-on-tone card back, with your personal icon, and no card number</p>
                <p>Visa Infinite</p>
                <p>Handle with care, clean with a microfiber cloth</p>
            </div>
            <div className='list'>
                <h3>Travel</h3>
                <p>5x points with BLADE on helicopter rides and flights</p>
                <p>CLEAR Plus membership</p>
                <p>Cancel flights without fees</p>
                <h3>Personal Advisor</h3>
                <p>Advisor dedicated to your account</p>
                <p>1 on 1 sessions with available video calls</p>
                <p>Personalized dining and experiences concierge</p>
                <h3>App</h3>
                <p>True native iOS app with buttery-smooth performance</p>
                <p>Dark Mode support</p>
                <p>Instant purchase notifications</p>
                <p>Unlimited virtual cards</p>
                <p>Apple Pay</p>
            </div>
        </div>
        <div className='button-executive'>
                <button>Become a founding member</button>
                <p>$999/yr.</p>
            </div>
    </div>
  )
}

export default Executive