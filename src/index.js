import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component{
    constructor(){
        super()
        this.eno = 215
    }

    render(){
        return(
            <div>
                <p>Hello react</p>
                <h3> Hello : {this.props.name}</h3>
                <h3>Array : {this.props.barchartInfo}</h3>
                <h3>Boolean : {this.props.propBool}</h3>
                <h3> function : {this.props.propFunc(3)}</h3>
                <h3> number: { this.props.propNumber}</h3>
                <h3> String : {this.props.propString}</h3>
            </div>
        )
    }
}

App.propTypes = {
    name: PropTypes.string,
    barchartInfo: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
  };

App.defaultProps = {
    name: "Krishna",
    barchartInfo : [1,2,3,4],
    propBool : true,
    propFunc : function(p){
        return p
    },
    propNumber : 1 ,
    propString : "Bengaluru"
}

render(<App/> , document.getElementById('root'))

{/*

    assignment : 
    
<div backgroundcolor: blue >  initial load 

<div>
if i click on a button 
<div backgroundColor: black >

</div>

constructor : switch true 
{this.state.switch ? <AppBlue/> : <AppBlack/> }

*/ }