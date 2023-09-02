import React,{Component} from 'react';
import './App.css';
import {init} from './GameEngine/GameManager.js'



class App extends Component  {
  constructor(props) {
    super(props);
    this.score = React.createRef()
    this.gameBoard = React.createRef()
  }

  componentDidMount(){
    init(this.gameBoard,this.score)
  }

  render(){
    return (
      <div >
        <div id="header"><h2>SnakeGame</h2><span ref={this.score}></span></div>
          <div  ref={this.gameBoard} className="App" id="gameBoard">   
        </div>
      </div>
  );
}
}

export default App;
