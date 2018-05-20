import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'

class Listposts extends Component {
	
componentDidMount() {
	this.props.fetchposts()
}
	
  render() {
	  console.log(this.props.posts)
    return (
	
	
	<div>
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

function mapStateToProps({posts}) {
  return {
    posts
  }
}

export default connect(mapStateToProps, { fetchposts : getAllPosts })(Listposts);
