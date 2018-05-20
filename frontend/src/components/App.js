import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'
import { getAllPosts } from '../actions'


class App extends Component {
	
componentDidMount() {
	
	this.props.fetchposts()
	this.props.fetchcategories()
}
	
  render() {
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
		  
		<h2> Posts </h2>
		<div>
		{this.props.posts && this.props.posts.map(p =>
		<div key = {p.id}>{p.title} </div>
		)}
		</div>
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories : categories,
	posts : posts
  }
}

export default connect(mapStateToProps, {fetchcategories : getAllCategories, fetchposts : getAllPosts })(App)