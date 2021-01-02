import React, { Component } from 'react'
import CounterDis from '../counter-display/counter-dis';
import './code.css'
import Content from '../content/content'



class Codes extends Component{

    constructor(){
        super();

        this.state = {
            val:'',
        }

    }

    delClick = (event)=>{

            this.setState({val:event.target.value})
            console.log(event.target.value)
           

    }



    render()
    {

        return(
            <div className="outer">
        
            <button type="button" className="btn btn-primary"value="DEL" onClick={this.delClick} >DEL</button>

            

        
     
        

        

        


    </div>

        )
    }
    
}
    
export default Codes;