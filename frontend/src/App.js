import React, { Component } from 'react';
import logo from './logo.svg';
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css';

class App extends Component {
	
state = {
	posts :[]
}
	
componentDidMount() {
	ReadableAPI.getAllCategories().then((categories) => {this.setState({categories})
	})
	ReadableAPI.getAllPosts().then((posts) => {this.setState({posts})
	})
}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
		  {console.log(this.state.categories)}
		  {console.log(this.state.posts)}
        </p>
      </div>
    );
  }
}

export default App;
