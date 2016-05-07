require('stylesheets/fizzbuzz.scss');
import React from 'react';
import {
    Component,
    render
} from 'react';

class FizzBuzzCounter extends Component {
    render() {
        let value = this.props.value;
        let divBy3 = value % 3 === 0;
        let divBy5 = value % 5 === 0;
        let styleObj = { color: 'inherit'};
        let content = value;
        if (divBy3 && divBy5) {
            content = 'FizzBuzz';
            styleObj.color = 'green';
        } else if (divBy3) {
            content = 'Fizz';
            styleObj.color = 'yellow';
        } else if (divBy5) {
            content = 'Buzz';
            styleObj.color = 'blue';
        }

        return <div className="fizz-buzz__counter" style={styleObj}>{content}</div>
    }
}

FizzBuzzCounter.propTypes = {
    value: React.PropTypes.number
};

class FizzBuzzTimer extends Component {
    constructor(props) {
        super();
        this.state = {
            start: false,
            count: 0
        };
    }

    startTimer() {
        this.interval = setInterval(() => {
            //...
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count);
        }, this.props.interval);

    }

    componentDidMount() {
        this.setState({
            start: true
        });
        this.startTimer();
    }

    handleButtonPress() {
        var timerState = this.state.start;
        if (timerState) {
            clearInterval(this.interval);
        } else {
            this.startTimer();
        }
        timerState = !timerState;
        this.setState({
            start: timerState
        });
    }
    render() {
        const state = this.state.start;
        const buttonText = state ? 'Stop the Timer' : 'Start the Timer';
        const stateText = state ? 'timer--started' : 'timer--stopped';
        return <div className = {
                `fizz-buzz-timer ${stateText}`
            } >
            < FizzBuzzCounter value = {
                this.state.count
            }
        /> < button className = "fizz-buzz__button"
        onClick = {
            this.handleButtonPress.bind(this)
        } > {
            buttonText
        } < /button> < /div>
    }
}


export default class FizzBuzzApp extends Component {
    constructor() {
        super();
        this.state = {
            timerCount: 2
        }
    }
    handleAddButton() {
        console.log(this.refs.timerlist);
        let count = this.state.timerCount;
        this.setState({
            timerCount: count + 1
        });
    }
    render() {
        let components = [];
        let defInterval = 500;
        for (let c = 0; c < this.state.timerCount; c++) {
            const ref = `fizzer-${c}`;
            components.push( < FizzBuzzTimer ref={ref} key={c} interval={defInterval}/>);}

            return <div className = "fizz-buzz" >
                < div ref = "timerlist"
            className = "fizz-buzz-timers" > {
                components
            } < /div> < button onClick = {
                this.handleAddButton.bind(this)
            }
            className = "fizz-buzz__add-button" > Add FizzBuzz < /button> < /div>
        }
    }
