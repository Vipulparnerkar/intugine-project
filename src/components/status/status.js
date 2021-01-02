
import React, { Component } from 'react'
import './status.css'
import Content from '../content/content'
import axios from 'axios';    

const token =  'tTU3gFVUdP';

class Status extends Component{
    constructor(props){
        super(props);
        this.state = {
            datas:{
                Data:undefined
           },
            val:'',           
        }
    }

    componentDidMount(){
        const config = {
            headers :{Authorization:`Bearer ${token}`}
        };

        const body = {
            email:"parnerkarvipul@gmail.com"
        }
       axios.post(' https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch', body, config)
       
       
        .then(res=>{    
            this.setState({Data:res.data},()=>console.log('done'));
        })
    
        .catch((error)=>{
            console.log(error.message)
        })

    }
    
    delClick = (event)=>{
        this.setState({val:event.target.value})
        console.log(event.target.value)
    }

    render(){
       const {Data,val}  =this.state;
       if(!this.state.Data){
           return <span>Loading...</span>
       }
       var filtered = Data.filter(function(e){

        if(e.current_status_code===val){
           console.log(e)
           
           return e
        }
    })
    return(
            <div>
                 <div className="outer">
            <button value="DEL" className="btn btn-primary" onClick={this.delClick}>DEL</button>
            <button value="INT" className="btn btn-primary" onClick={this.delClick}>INT</button>
            <button value="OOD" className="btn btn-primary" onClick={this.delClick}>OOD</button>
            <button value="DEX" className="btn btn-primary" onClick={this.delClick}>DEX</button>
            <button value="NFI" className="btn btn-primary" onClick={this.delClick}>NFI</button>

         </div>
            <div className="outer-div">  
                <div className="boxall">
                     <Content key={Data._id}  Data={this.state.Data} value={this.state.val} filtered = {filtered} />
                </div>
            </div>
        </div>
           
      
        )

    }

    



}
    


export default Status;