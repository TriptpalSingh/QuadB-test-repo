import React, { useEffect } from 'react'
import './countdown.css'

function Countdown() {


    var countdown = 60;
    useEffect(() => {
        var countdownNumberEl = document.getElementById('countdown-number');
        

        countdownNumberEl.textContent = countdown;
        setInterval(function () {
            countdown = --countdown <= 0 ? 60 : countdown;

            countdownNumberEl.textContent = countdown;
        }, 1000);
    }, [countdown])



    return (
        <div id="countdown">
            <div id="countdown-number"></div>
            <svg>
                <circle r="18" cx="20" cy="20"></circle>
            </svg>
        </div>
    )
}

export default Countdown