import React, { Component } from 'react'
import RideList from './RideList'
import RideShare from './RideList'
import "./ride.css"


class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }
  
  handleSearchTermSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit(this.textInput.value);
  };
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1 className="Heading">Dashboard</h1>
            <div className="SearchBar">
              <h1>SearchBar</h1>
              <form onSubmit={this.handleSearchTermSubmit}>
                <input type="text" placeholder="from" ref={(input) => this.textInput = input} />
                <button>Search</button>
              </form>
            </div>
            {/* <RideShare /> */}
            <RideList />
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
