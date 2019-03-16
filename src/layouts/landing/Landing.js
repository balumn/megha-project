import React, { Component } from 'react'
import BgPng from "../../Assets/bg.jpg"
import "./landing.css"

var sectionStyle = {
  // height: "100%",
  width : "100%",
  height: "1000px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BgPng})`,
};

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1" style={sectionStyle}>
            
            <h1>Welcome to BLOCRIDE !</h1>
            <p>The decentralized transportation future!</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Landing
