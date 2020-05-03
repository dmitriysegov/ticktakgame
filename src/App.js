import React from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      value: null,
    };
  }
  
  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <button className="square" onClick={() => this.props.squareClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      flag:true,
    };
  }

  checkWin() {
    const copySquares = this.state.squares.slice();
    this.checkRow(copySquares[0], copySquares[1], copySquares[2]);
    this.checkRow(copySquares[3], copySquares[4], copySquares[5]);
    this.checkRow(copySquares[6], copySquares[7], copySquares[8]);
    this.checkRow(copySquares[0], copySquares[3], copySquares[6]);
    this.checkRow(copySquares[1], copySquares[4], copySquares[7]);
    this.checkRow(copySquares[2], copySquares[5], copySquares[8]);
    this.checkRow(copySquares[0], copySquares[4], copySquares[8]);
    this.checkRow(copySquares[2], copySquares[4], copySquares[6]);
  }

  checkRow(a, b, c) {
    if (a === "X" && b === "X" && c === "X") {
      alert("winner X");
    } 
    if (a === "O" && b === "O" && c === "O") {
      alert("winner O");
    }
  }

  handleClick(i) {
    const flag = this.state.flag;
    let copySquares = this.state.squares.slice();
    if (copySquares[i] !== null) {
      return;
    }
    if (this.state.flag) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }
    this.setState({flag:!flag});
    this.setState({squares:copySquares}); 
    this.checkWin();
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} squareClick={() => this.handleClick(i)} />;
  }
  
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
        
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


function App() {
  return (
    <Game/>
  );
}

export default App;
