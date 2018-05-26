import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'
import { Switch, withRouter, Route } from 'react-router-dom';

class Listcategoryposts extends Component {
	
componentDidMount() {
	this.props.fetchposts()
}
	
  render() {
	  console.log(this.props.posts)
    return (
			<div>
	<Switch>
		<Route exact path='/categories/:name'
            render={({ match }) => (
			<div>
              {this.props.posts && this.props.posts.filter(p => p.category == match.params.name).map(p =>
			  <div>
			   <div key = {p.id}>{p.title} </div>
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

export default withRouter(connect(mapStateToProps, { fetchposts : getAllPosts })(Listcategoryposts));
