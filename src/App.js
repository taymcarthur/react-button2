import React from 'react'

import './button.css'

var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      likescount: 0,
      grammarlikes: 'likes'
    }
  },

  handleClick: function() {
    this.setState({
      likescount: this.state.likescount + 1,
      grammarlikes: this.state.likescount === 0 ? 'like' : 'likes'
    })
  },

  render: function () {
    // var likes = "likes" 
    // if (this.state.likescount === 1) {
    //   likes = "like"
    // }
    return (
      <div className='page' >
        <button className="button" onClick={this.handleClick}>{this.state.likescount} {this.state.grammarlikes}</button>
      </div>
    )
  }
})

export default LikeButton