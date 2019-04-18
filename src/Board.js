import React, { Component } from 'react';
import './Board.css';
import Box from './Box';
import Matrix from './matrix'

class Board extends Component {

  constructor(props) {
      super(props);

      let data = []
      data[0] = [ 0,0,0,0 ]
      data[1] = [ 0,0,0,0 ]
      data[2] = [ 0,64,64,128 ]
      data[3] = [ 1024,512,256,128 ]
      this.state = {data};
      this.matrix = new Matrix(data);
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


    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getAllIndexes(arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }


   addRandom() {
        let list = this.shuffleArray([0,1,2,3]);
        let data = Object.assign({}, this.state.data);
        console.log(list);
        debugger;

        for(let i =0 ; i< list.length; i++) {
            let line = list[i];
            if(data[line].includes(0)) {
                let zerosColumns = this.shuffleArray(this.getAllIndexes(data[line], 0))
                let column = zerosColumns[0];
                data[line][column] = this.shuffleArray([2,2,2,2,4,4,8])[0];
                this.setState({data});
                return;
            }
        }
   }

  onPressUp(){
      this.setState({data: this.matrix.onPressUp()}, ()=> {
        this.addRandom();
      });
  }

  onPressDown(){
    this.setState({data: this.matrix.onPressDown()}, ()=> {
        this.addRandom();
      });
   }

   onPressRight(){
    this.setState({data: this.matrix.onPressRight()}, ()=> {
        this.addRandom();
      });
   }

   onPressLeft(){
    this.setState({data: this.matrix.onPressLeft()}, ()=> {
        this.addRandom();
      });
   }

   
  render() {
    const {data} = this.state;
    return (
        <div>
            <div className="board">
                {data[0].map( val => (<Box value={val}/>))}
                {data[1].map( val => (<Box value={val}/>))}
                {data[2].map( val => (<Box value={val}/>))}
                {data[3].map( val => (<Box value={val}/>))}
            </div>
            <button onClick={this.onPressUp}>Up</button>
            <button onClick={this.onPressDown}>Down</button>
            <button onClick={this.onPressLeft}>Left</button>
            <button onClick={this.onPressRight}>Right</button>
            
            
      </div>
    );
  }
}

export default Board;
