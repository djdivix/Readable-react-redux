import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import SinglePost from './SinglePost'

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
				<SinglePost post = {p}/>
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
			  <SinglePost post = {p}/>
			  )}
			</div>
			)}
          />
		  
		  <Route exact
            path='/posts/:id' 
            render={({ match }) => (
			<div>
               {this.props.posts && this.props.posts.filter(p => p.id == match.params.id).map(p =>
			   <div key = {p.id}>
			   <h2>{p.title}</h2>
				<p>Author <b>{p.author}</b> Time {p.timestamp}</p>
				<p>{p.body}</p>
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
