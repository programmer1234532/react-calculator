import React, { Component } from 'react';

const Screen = (props) => {
    //
    return(
        <div className="screen">
            <div className="total">{props.output}</div> 
        </div>
    );
}

export default Screen;