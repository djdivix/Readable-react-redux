import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts, sortvscoreLH, sortvscoreHL, sorttimestampLH, sorttimestampHL } from '../actions'
import { Switch, withRouter, Route } from 'react-router-dom';
import SinglePost from './SinglePost'
import NewPost from './NewPost'

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
			<h1 className = "AllPosthead">Showing All Posts</h1>
			<div>
				<span>Sort Posts by : </span>
				<button onClick={() => this.props.vscoreLH()}>Number of Votes : Low to High</button>
				<button onClick={() => this.props.vscoreHL()}>Number of Votes : High to Low</button>
				<button onClick={() => this.props.timestampLH()}>Date Added : Low to High</button>
				<button onClick={() => this.props.timestampHL()}>Date Added : High to Low</button>

			</div>
			
              {this.props.posts && this.props.posts.map(p =>
			  <div key = {p.id}>
				<SinglePost post = {p}/>
		      </div>
			  )}
			</div>
			)}
         />
		 
		<Route exact path='/posts/new'
			render={({ match }) => (
            <NewPost/>
			)}
        />
		  
		<Route
            path='/posts/edit/:id'
            render={({ match }) => (
			<div>
			{this.props.posts && this.props.posts.filter(p => p.id === match.params.id).map(p =>
			<NewPost post = {p} key = {p.id}/>	
			  )}
			</div>
            )}
        />
		
		<Route
            path='/posts/delete/:id'
            render={({ match }) => (
			<div>
			{this.props.posts && this.props.posts.filter(p => p.id === match.params.id).map(p =>
			   <NewPost post = {p} key = {p.id}/>	
			  )}
			</div>
            )}
        />
		  
		<Route exact path='/categories/:name'
            render={({ match }) => (
			<div>
			<h1> Posts for {match.params.name} category </h1>
              {this.props.posts && this.props.posts.filter(p => p.category === match.params.name).map(p =>
			  <SinglePost post = {p} key = {p.id}/>
			  )}
			</div>
			)}
          />
		  
		  <Route exact
            path='/viewpost/:id' 
            render={({ match }) => (
			<div>
               {this.props.posts && this.props.posts.filter(p => p.id === match.params.id).map(p =>
			   <SinglePost post = {p} key = {p.id}/>	
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

export default withRouter(connect(mapStateToProps, { fetchposts : getAllPosts, vscoreLH :  sortvscoreLH, vscoreHL : sortvscoreHL, timestampLH : sorttimestampLH, timestampHL :  sorttimestampHL })(Showposts));
