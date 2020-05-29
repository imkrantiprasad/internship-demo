import React from 'react';
import './App.css';
import votedata from "./votedata.json"
import Comment from './Comment';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      votes: votedata
    }

    this.handleUpClick = this.handleUpClick.bind(this)
    this.handleDownClick = this.handleDownClick.bind(this)

  }
  handleUpClick(id) {
    this.setState(prevState => {
      const updated = prevState.votes.map(vote => {
        if (vote.id === id) {
          return {
            ...vote,
            up: vote.up + 1
          }
        }
        return vote
      })
      return {
        votes: updated
      }
    })
  }
  handleDownClick(id) {
    this.setState(prevState => {
      const updated = prevState.votes.map(vote => {
        if (vote.id === id) {
          return {
            ...vote,
            down: vote.down + 1
          }
        }
        return vote
      })
      return {
        votes: updated
      }
    })
  }
  render() {
    const inputStyle = {
      width: '100%',
      height: 200,
      // float: 'center'
      // margin: 'auto'
    };
    const dataItem = this.state.votes.map(vote =>
      <Comment
        id={vote.id}
        name={vote.name}
        comments={vote.comments}
        up={vote.up}
        down={vote.down}
        handleUpClick={this.handleUpClick}
        handleDownClick={this.handleDownClick}
      />
    )
    return (
      <div className="main" >
        <div className="formBox">
          <form>
            <input style={inputStyle} type="text" className="inptBox" placeholder="Type a comment..." />
            <br />
            <br />
            <button className="btn1" >Post Comment</button>
            <br />
          </form>
        </div>
        <div className="commentBox">
          {dataItem}
        </div>
      </div>
    );
  }
}

export default App;
