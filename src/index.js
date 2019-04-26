import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import * as serviceWorker from './serviceWorker';
import Matrix from './logic/matrix';
import BoxData from './logic/boxData';
ReactDOM.render(<Board/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const data = Matrix.emptyBoardData();
const matrix = new Matrix(data);
matrix.print();