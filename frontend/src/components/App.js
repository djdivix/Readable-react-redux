import React, { Component } from 'react';
import Showposts from './Showposts'
import Listcategories from './Listcategories'
import { withRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
		<div className="Homelink" >
		<Link to='/'>Home</Link>
		</div>
		<Listcategories/>
		<div className = "NewPostlink">
		<Link to='/posts/new'>New Post</Link>
		</div>
		<Showposts/>
      </div>
    )
  }
}

export default withRouter(App);