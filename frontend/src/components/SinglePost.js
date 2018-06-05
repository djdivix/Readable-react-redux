import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { upvotePost, downvotePost, ondeletePost } from '../actions';
import { withRouter } from 'react-router-dom';
import Comments from './Comments'

class SinglePost extends Component {

	  render() {
  const { post, onUpvote, onDownvote, deletePost } = this.props;
    return (
			  <div>
				<Link to={`/viewpost/${post.id}`}>
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
					<div>
						{post.commentCount} Comments 
					</div>
					<div>
						<span><Link to={`posts/edit/${post.id}`} > Edit </Link></span>
						<span><Link to='/' onClick={() => deletePost(post.id)}> Delete </Link></span>
					</div>
					{this.props.match.url.indexOf('viewpost') !== -1 ?
					<Comments postid = {post.id}/> : ''
					}
			    </div>
				<hr/>
			  </div>
			   )
	  }
}

export default withRouter(connect(undefined,{ onUpvote: upvotePost, onDownvote: downvotePost, deletePost : ondeletePost})(SinglePost));