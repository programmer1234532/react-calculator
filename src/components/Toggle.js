import React, { Component } from 'react';

class Toggle extends Component {
    
    render(){
        return(
            <div className="toggle">
                <p>Dark</p>
                <label className="switch">
                    <input type="checkbox" onClick={this.props.toggleTheme}/>
                    <span className="slider round"></span>
                </label>
                <p>Light</p>
            </div>
        );
    }
    
}

export default Toggle;