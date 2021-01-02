
import { Component } from 'react';
import './App.css';
import Counter from './components/codes/counter';
import Header from './components/header/header'
import Status from './components/status/status';


class App extends Component {
  constructor(){
    super()

    
  }


  render(){
    return (
      <div className="App">
        <Header />
        
        <Status/>
        
        
      </div>
    );

  }
 
}

export default App;
