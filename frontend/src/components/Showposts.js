import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'
import { Switch, withRouter, Route } from 'react-router-dom';

class Showposts extends Component {
	
componentDidMount() {
	this.props.fetchposts()
}
	
  render() {
	  console.log(this.props.posts)
    return (
			<div>
	<Switch>
	
		<Route exact path='/'
            render={({ match }) => (
			<div>
			<h1>All Posts</h1>
              {this.props.posts && this.props.posts.map(p =>
			  <div key = {p.id}>
			   <div>{p.title} </div>
			   <div>{p.body} </div>
			   <div>{p.author}</div>
			   <div>{p.category} </div>
			   </div>
			  )}
			</div>
			)}
         />
	
		<Route exact path='/categories/:name'
            render={({ match }) => (
			<div>
			<h1> Posts for {match.params.name} category </h1>
              {this.props.posts && this.props.posts.filter(p => p.category == match.params.name).map(p =>
			  <div key = {p.id}>
			   <div >{p.title} </div>
			   <div >{p.body} </div>
			   <div>{p.author}</div>
			   <div >{p.category} </div>
			   </div>
			  )}
			</div>
			)}
          />
		</Switch>
      </div>
	)
  }
}

function mapStateToProps({posts}) {
  return {
    posts
  }
}

export default withRouter(connect(mapStateToProps, { fetchposts : getAllPosts })(Showposts));
