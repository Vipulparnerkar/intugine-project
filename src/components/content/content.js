import React from 'react';
import './content.css'


const Content = (props) =>{
   
    const loc = props.filtered.map((item,i)=>{
                if(typeof props.filtered[i].scan != "undefined"){
           return props.filtered[i].scan.map((items,idx)=>{
                return <li>{props.filtered[i].scan[idx].location}</li>
            })
        }
    })
    const loctime = props.filtered.map((item,i)=>{
        if(typeof props.filtered[i].scan != "undefined"){
   return props.filtered[i].scan.map((items,idx)=>{
        return <li>{props.filtered[i].scan[idx].time}</li>
    })
}
})
    
  
    const awb = props.filtered.map((item,i)=>{
        return <p value={props.filtered[i].awbno} key={i}>#{props.filtered[i].awbno}</p>})
    const Transporter = props.filtered.map((item,i)=>{
        return <p key={i}>{props.filtered[i].carrier}</p>})
    const Source = props.filtered.map((item,i)=>{
        return <p key={i}>{props.filtered[i].from}</p>})
    const Destination = props.filtered.map((item,i)=>{
        return <p key={i}>{props.filtered[i].to}</p>})
       
     const start = props.filtered.map((item,i)=>{
         return <p key={i}>{props.filtered[i].time}</p>})
     const etd = props.filtered.map((item,i)=>{
        if(typeof props.filtered[i].extra_fields !="undefined" ){
             return <p key={i}>{props.filtered[i].extra_fields.expected_delivery_date}</p>
     }})
                   
     const status = props.filtered.map((item,i)=>{
        return <p>{ props.filtered[i].current_status}</p>})
       function click  (event){
           event.preventDefault();
           var y  = document.getElementById("test").innerText;
           console.log(y)
            console.log( event.target.value)
            
        }

	return (
        <div className="con">
            
        <div className="fl">
             <div>
             < img className="logob" src="FrontendAssets\destination.svg" alt="pic"/>
            
                <ul>
                    <li key={props.Data._id}>
                    
                       {loc}
                 
                    </li>
                </ul>
                < img className="logob" src="FrontendAssets\warehouse.svg" alt="pic"/>

       </div>

        </div>
        <div className="fl">
        <table className="table ">
            <thead>
                <tr>
                <th scope="col">AWBNO</th>
                <th scope="col">TRANSPORTER</th>
                <th scope="col">SOURCE</th>
                <th scope="col">DESTINATION</th>
                <th scope="col">Start</th>
                <th scope="col">ETD</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    
                    <td onClick={click} id="test" className="try">{awb}</td>

                  
                    

                    
                
                <td>{Transporter}</td>
                <td>{Source}</td>
                <td>{Destination}</td>
                <td>{start}</td>
                
                <td>{etd}</td>
                <td className="forstatus">{status}</td>
                </tr>
                           
            </tbody>
            </table>
        </div>

        </div>

		);

     }
export default Content;