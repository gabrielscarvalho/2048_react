import React, { Component } from 'react';
import './Board.css';
import Box from './Box';
import Matrix from './logic/matrix'
import {MAX_LINE, MAX_COLUMN} from './logic/position';

class Board extends Component {

  constructor(props) {
    super(props);

    let data = Matrix.emptyBoardData();
    
    this.matrix = new Matrix(data);
    
    
    this.state = {data: this.matrix.addRandom()};

    this.onPressUp = this.onPressUp.bind(this);
    this.onPressDown = this.onPressDown.bind(this);
    this.onPressRight = this.onPressRight.bind(this);
    this.onPressLeft = this.onPressLeft.bind(this);

    this.checkKey = this.checkKey.bind(this);
    document.onkeydown = this.checkKey;
  }

  checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      this.onPressUp();
    }
    else if (e.keyCode == '40') {
      this.onPressDown();
    }
    else if (e.keyCode == '37') {
      this.onPressLeft();
    }
    else if (e.keyCode == '39') {
      this.onPressRight();
    }

  }

  onPressUp() {
    this.setState({ data: this.matrix.pressedUp() }, () => {
      this.setState({ data: this.matrix.addRandom() });
    });
  }

  onPressDown() {
    this.setState({ data: this.matrix.pressedDown() }, () => {
      this.setState({ data: this.matrix.addRandom() });
    });
  }

  onPressRight() {
    this.setState({ data: this.matrix.pressedRight() }, () => {
      this.setState({ data: this.matrix.addRandom() });
    });
  }

  onPressLeft() {
    this.setState({ data: this.matrix.pressedLeft() }, () => {
      this.setState({ data: this.matrix.addRandom() });
    });
  }

  sumPoints(data) {
    return this.matrix.getPoints();
  }


  render() {
    const {data} = this.state;
    return (
      <div>
        <div className="board">

          { data.map(line => {
              return line.map(boxData =>  
                <Box value={boxData.value}/> 
              )
            })
          }
          
      
        </div>
        <div>Total Points: <span>{this.sumPoints(data)}</span></div>
        <button onClick={this.onPressUp}>Up</button>
        <button onClick={this.onPressDown}>Down</button>
        <button onClick={this.onPressLeft}>Left</button>
        <button onClick={this.onPressRight}>Right</button>


      </div>
    );
  }
}

export default Board;
