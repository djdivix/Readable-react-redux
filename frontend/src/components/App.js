import React, { Component } from 'react';
import Listposts from './Listposts'
import Listcategories from './Listcategories'
import { Link,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
		  <Route exact path = '/'
		  render = {() => (<Listcategories/>)}
		  />
		  <Route exact path = '/'
		  render = {() => (<Listposts/>)}
		  />
      </div>
    )
  }
}

export default App;