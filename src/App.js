import './App.css';
import React, {Component} from 'react';
import Mycars from './components/myCars';

class App extends Component {
  state = {
    titre: 'Mon catalogue voitures',
    color: 'green'
  }
  changeTitle = (e) => {
    this.setState({titre: "Nouveau Titre"});
  }
  changeViaParam = (titre) => {
    this.setState({titre: titre})
  }
  changeViaBind = (param) => {
    this.setState({titre: param})
  }
  changeViaInput = (e) => {
    this.setState({titre: e.target.value})
  }
  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre} color={this.state.color}/>
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={()=>{this.changeViaParam("Titre via param")}}>Via Param</button>
        <button onClick={this.changeViaBind.bind(this, "Titre via bind")}>Via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
}}

export default App;
