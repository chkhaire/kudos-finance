import React, {Component, useState} from "react";
import './App.css';

class App extends Component {

constructor(props)
     {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
        this.state={time: new Date()};
     
     }
      
    
componentDidMount() 
    {
        this.intervalid=setInterval(()=>
        {
            this.setState({date:new Date().toLocaleTimeString()});
            this.setState({time:new Date()});
        },1000);
    }


 render() 
    {
         return(
            <div className={`${(this.state.time.getHours()%2!=0) ? "odd" : "even"} `}>
            <div className="Clock">
            {this.state.date }
            </div>
             </div>
            
             )
    }

   
}


export default App;
