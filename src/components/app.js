import React, { Component } from 'react';
import Screen from "./Screen";
import Buttons from "./Buttons";
import Toggle from "./Toggle";
import "../scss/app.scss";

class App extends Component{
    constructor(props) {
     super(props);
    
     this.state = {
       theme:false, 
       output:""
     }
    
     this.toggleTheme = this.toggleTheme.bind(this);
     }
    
    toggleTheme = () => {
        if(this.state.theme === false){
            this.setState({theme: true});
        }
        else{
            this.setState({theme:false});
        }
        console.log(this.state.theme);
    }

    clearScreen = (data) => {
        this.setState({output:data});
    }

    displayOnTheScreen = (data2) => {
        if(data2 === "="){
            try{
                const result = eval(this.state.output);
                this.setState({output:result});
            }
            catch(e){
                this.setState({output:"error"});
            }
        }
        else{
            this.setState({output:this.state.output + data2});
        }
    }


    
    render(){
    
        return(
            <div className={this.state.theme ? "background light" : "background dark"}>
                <div className="calculator" >
                    <Screen output={this.state.output}/>
                    <Buttons dOnScreen={this.displayOnTheScreen} deleteScreen={this.clearScreen}/>
                </div>
                <Toggle toggleTheme={this.toggleTheme} theme={this.state.theme}/>
            </div>
        );
    }
}

export default App;