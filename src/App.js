 
import React, {Component} from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';




class App extends Component {

  state =  {
    
    branding: "Contact Manager",
     color : 'color'
  }

  HandleBrand(){

    this.setState({branding: 'Branch Manager'});
  }

 render() {
  return (
    <Provider>
    <div className="App">
      <Header branding = {this.state.branding}/>
      <div className="container">
        <Contacts/>
        <button onClick={()=> this.HandleBrand()}> Change Manager </button>
      </div>
    </div>
    </Provider>
  );
  }
}

export default App;
