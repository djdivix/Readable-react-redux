import React, { Component } from 'react';
import Listposts from './Listposts'
import Listcategories from './Listcategories'
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
		<Listcategories/>
		<Listposts/>
      </div>
    )
  }
}

export default withRouter(App);