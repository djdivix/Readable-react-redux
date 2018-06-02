import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { upvotePost, downvotePost } from '../actions';

class SinglePost extends Component {

	  render() {
  const { post, onUpvote, onDownvote } = this.props;
    return (
			  <div>
			  <Link to={`/posts/${post.id}`}>
			   <div>{post.title} </div>
			   </Link>
			   <div>{post.body} </div>
			   <div>{post.author}</div>
			   <div>{post.category} </div>
			   <div>
				<div>
				<FaThumbsOUp onClick={() => onUpvote(post.id)} />
				</div>
				<div>
				<span>{post.voteScore}</span>
				</div>
				<div>
				<FaThumbsODown onClick={() => onDownvote(post.id)} />
				</div>
				</div>
				</div>
			   )
	  }
}

export default connect(undefined,{ onUpvote: upvotePost, onDownvote: downvotePost })(SinglePost);