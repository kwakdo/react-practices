import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const date = new Date();
    const [clock, setClock] = useState({
        hours: date.getHours() > 12 ? date.getHours() -12 : date.getHours(),
        minutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        seconds: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
        session: date.getHours() >= 12 ? "pm" : "am"
    })


      const updateClock = () => {
        setClock({
            hours: date.getHours() > 12 ? date.getHours() -12 : date.getHours(),
            minutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
            seconds: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
            session: date.getHours() >= 12 ? "pm" : "am"
        })
      }

      useEffect(() => {
        const intervalID = setInterval(() =>
        
        updateClock(), 1000);
        return () => {
          clearInterval(intervalID);
        }
      }, [updateClock])

    return (
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={clock.hours}
                minutes={clock.minutes}
                seconds={clock.seconds}
                session={clock.session} />
    );
}