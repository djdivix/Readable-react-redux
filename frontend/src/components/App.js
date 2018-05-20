import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'
import Listposts from './Listposts'

class App extends Component {
	
componentDidMount() {
	this.props.fetchcategories()
}
	
  render() {
	  console.log(this.props.categories)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>

		<h2> Categories </h2>
		  <span>
		 {this.props.categories && this.props.categories.map(c => 
		  <span key={c.name}>{c.name}  </span>
		  )}
		  </span>
		  <Listposts/>
		
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps, {fetchcategories : getAllCategories})(App);