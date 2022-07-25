import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            hours: date.getHours() > 12 ? date.getHours() -12 : date.getHours(),
            minutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
            seconds: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
            session: date.getHours() >= 12 ? "pm" : "am"
        }
    }
    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            this.setState({
                hours: date.getHours() > 12 ? date.getHours() -12 : date.getHours(),
                minutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
                seconds: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
                session: date.getHours() >= 12 ? "pm" : "am"
            });
        }, 1000);
    }
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Class Component LifeCycle Practice</h2>
                    <Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} session={this.state.session}/>
            </div>
        );
    }
}