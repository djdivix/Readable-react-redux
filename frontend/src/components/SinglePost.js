import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class SinglePost extends Component {
	  render() {
  const { post } = this.props;
    return (
			  <div key = {post.id}>
			  <Link to={`/posts/${post.id}`}>
			   <div>{post.title} </div>
			   </Link>
			   <div>{post.body} </div>
			   <div>{post.author}</div>
			   <div>{post.category} </div>
			   </div>
			   )
	  }
}
export default (SinglePost);