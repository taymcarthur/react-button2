import React from 'react'

var styles= {
  main: {
  margin: 'auto',
  marginLeft:'50%',
  marginTop:'25%'
  },
  button: {
    backgroundColor: 'pink',
    color: 'white',
    height: '50px',
    width: '100px',
    lineHeight: '50px',
    fontSize: '24px',
    textAlign: 'center',
    border: 'pink'
  }
}

export default React.createClass({
    getInitialState: function () {
      return {
        count: 0,
      }
    },
    handleClick: function () {
      this.setState({
        count: this.state.count + 1,
      })
    },
    render: function () {
      var likes = "Likes"
      if(this.state.count === 1){
        likes = "Like"
      }
      return (
          <div style={styles.main}>
            <button style={styles.button} onClick={this.handleClick}>{this.state.count} {likes}</button>
          </div>
        )
    }
})