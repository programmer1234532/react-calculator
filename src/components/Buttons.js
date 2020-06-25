import React, { Component } from 'react';

class Buttons extends Component{
    constructor(props) {
        super(props);
    }

    clearTheScreen = () => {
        const clear = "";
        this.props.deleteScreen(clear);
    }

    displayOnScreen = (e) => {
        const element = e.target.innerText;
        this.props.dOnScreen(e.target.innerText);
    }

    render(){
        return (
            <div className="buttons">
                <div onClick={this.clearTheScreen} className="individual-button red">C</div>
                <div onClick={this.displayOnScreen} className="individual-button">(</div>
                <div onClick={this.displayOnScreen} className="individual-button">)</div>
                <div onClick={this.displayOnScreen} className="individual-button orange">/</div>
                <div onClick={this.displayOnScreen} className="individual-button">7</div>
                <div onClick={this.displayOnScreen} className="individual-button">8</div>
                <div onClick={this.displayOnScreen} className="individual-button">9</div>
                <div onClick={this.displayOnScreen} className="individual-button orange font-big">*</div>
                <div onClick={this.displayOnScreen} className="individual-button">4</div>
                <div onClick={this.displayOnScreen} className="individual-button">5</div>
                <div onClick={this.displayOnScreen} className="individual-button">6</div>
                <div onClick={this.displayOnScreen} className="individual-button orange">-</div>
                <div onClick={this.displayOnScreen} className="individual-button">1</div>
                <div onClick={this.displayOnScreen} className="individual-button">2</div>
                <div onClick={this.displayOnScreen} className="individual-button">3</div>
                <div onClick={this.displayOnScreen} className="individual-button orange">+</div>
                <div onClick={this.displayOnScreen} className="individual-button zero">0</div>
                <div onClick={this.displayOnScreen} className="individual-button">.</div>
                <div onClick={this.displayOnScreen} className="individual-button green">=</div>
            </div>
        );
    }
    }

export default Buttons;
