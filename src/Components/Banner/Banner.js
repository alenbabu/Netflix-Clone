import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-content'>
            <div className='banner-title-content'>
                <img className='banner-title-logo' src="./assets/banner-logo.png" alt=""/>
                <h4 className='banner-title'>SERIES</h4>
            </div>
            <div className='banner-heading-content'>
                <h1 className='banner-heading'>MONEY HEIST</h1>
                <h4 className='banner-description'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan</h4>

            </div>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>More info</button>

            </div>
        </div>
        <div className='fade-bottom'></div>

    </div>
  )
}

export default Banner