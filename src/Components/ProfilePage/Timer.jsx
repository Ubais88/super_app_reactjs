import React, { useEffect, useState } from 'react'
import Style from "./Timer.module.scss"
import {BiSolidDownArrow ,BiSolidUpArrow } from "react-icons/bi"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Timer = () => {
    const sound = new Audio("Images/sound.mp3");

    const [hours , setHours] = useState('00')
    const [minutes , setMinutes] = useState('00');
    const [seconds , setSeconds] = useState('00');
    const [duration, setDuration] = useState(0);
    const [timerIsActive, setTimerIsActive] = useState(false);
    const [startbtn , setStartbtn] = useState(true);
    const [playing, setPlaying] = useState(false);
  
    const startTimer = () => {
      setTimerIsActive(true);
    };
  
    const resetTimer = () => {
      setHours("00")
      setMinutes("00")
      setSeconds("00")
      setDuration("00")
      setPlaying(true)
      sound.play();
      setStartbtn(true);
      setTimerIsActive(false);
    };
  
    
    const hourIncrease = () => {
        if(hours < 99){
            // setHours(Number(hours)+1);
            setHours((parseInt(hours, 10) + 1).toString().padStart(2, '0'))
        }
        
    }
    const hourDecrease = () => {
        if(hours > 0){
            setHours((parseInt(hours, 10) - 1).toString().padStart(2, '0'))
        }
        if(hours <= 1){
            setHours("00")
        }
    }

    const minutesIncrease = () => {
        if(minutes >= 0){
            setMinutes((parseInt(minutes, 10) + 1).toString().padStart(2, '0'))
        }
        if(minutes >= 59){
            setMinutes('00')
        }
    }
    const minutesDecrease = () => {
        if(minutes > 0){
            setMinutes((parseInt(minutes, 10) - 1).toString().padStart(2, '0'))
        }
        if(minutes <= 1)
            setMinutes('00');
    }

    const secondsIncrease = () => {
        if(seconds >= 0){
            setSeconds((parseInt(seconds, 10) + 1).toString().padStart(2, '0'));
        }
        if(seconds >= 59){
            setSeconds('00')
        }
    }
    const secondsDecrease = () => {
        if(seconds > 0){
            setSeconds((parseInt(seconds, 10) - 1).toString().padStart(2, '0'));
        }
        if(seconds <= 1){
            setSeconds('00');
        }
    }

    const handleSetDuration = () => {
        if(!startbtn){
            setTimerIsActive(false);
            setStartbtn(true)
            setHours("00")
            setMinutes("00")
            setSeconds("00")
            setDuration("00")
        }
        else{
            const hourSec = parseInt(`${hours}` * 3600);
            const minSec = parseInt(`${minutes}` * 60);
            const secSec = parseInt(`${seconds}`);
            const totalSeconds = hourSec + minSec + secSec;

            setDuration(totalSeconds);
            console.log("start", totalSeconds)
            startTimer();
            setStartbtn(false);
        }
      };
    




  return (
    <div className={Style.main}>
        <div className={Style.timerContainer}>
            <div className={Style.circle}>
                <CountdownCircleTimer
                    size={130}
                    isPlaying={timerIsActive}
                    key={duration}
                    rotation='counterClockwise'
                    duration={duration}
                    strokeWidth={10}
                    colors="#FF6A6A"
                    onComplete={resetTimer}
                >
                    {({ remainingTime }) => (
                    <div className={Style.timeincircle}>
                        {`${Math.floor(remainingTime / 3600)
                        .toString()
                        .padStart(2, '0')}:${Math.floor((remainingTime % 3600) / 60)
                        .toString()
                        .padStart(2, '0')}:${Math.floor(remainingTime % 60)
                        .toString()
                        .padStart(2, '0')}`}
                    </div>
                    )}
                </CountdownCircleTimer>
            </div>
          <div className={Style.withbtn}>

            <div className={Style.timerbox}>
                <div className={Style.settime}>
                        <span className={Style.timetext}>Hours</span>
                        <div className={Style.btn}>
                            <BiSolidUpArrow onClick={hourIncrease} style={{cursor:'pointer'}} size={20}  />
                            <span className={Style.timedigit}>{hours}</span>
                            <BiSolidDownArrow onClick={hourDecrease} style={{cursor:'pointer'}} size={20}  />
                        </div>
                    </div>
                    <span className={Style.digitbreaker}>:</span>

                    <div className={Style.settime}>
                        <span className={Style.timetext}>Minutes</span>
                        <div className={Style.btn}>
                            <BiSolidUpArrow onClick={minutesIncrease} style={{cursor:'pointer'}} size={20}  />
                            <span className={Style.timedigit}>{minutes}</span>
                            <BiSolidDownArrow onClick={minutesDecrease} style={{cursor:'pointer'}} size={20} />
                        </div>
                    </div>
                    <span className={Style.digitbreaker}>:</span>

                    <div className={Style.settime}>
                        <span className={Style.timetext}>Seconds</span>
                        <div className={Style.btn}>
                            <BiSolidUpArrow onClick={secondsIncrease} style={{cursor:'pointer'}} size={20}  />
                            <span className={Style.timedigit}>{seconds}</span>
                            <BiSolidDownArrow onClick={secondsDecrease} style={{cursor:'pointer'}} size={20}  />
                        </div>
                    </div>
            </div>
            <div className={Style.startbtn}>
                <button className={Style.startstopbtn} onClick={handleSetDuration}>
                    {
                        startbtn ? "Start" : "Stop"
                    }
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Timer