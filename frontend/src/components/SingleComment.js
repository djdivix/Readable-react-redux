import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { upvoteComment, downvoteComment, ondeleteComment } from '../actions';
import { withRouter } from 'react-router-dom';
import Comments from './Comments'

class SingleComment extends Component {

	  render() {
			const { comment, onUpvote, onDownvote, deleteComment } = this.props;
			  return ( 
			  <div>

				<div>{comment.body} </div>
				<div>{comment.author}</div>
				<div>
					<div>
						<FaThumbsOUp onClick={() => onUpvote(comment.id)} />
					</div>
					<div>
						<span>{comment.voteScore}</span>
					</div>
					<div>
						<FaThumbsODown onClick={() => onDownvote(comment.id)} />
					</div>
					<div>
						<span><Link to='/' > Edit </Link></span>
						<span><Link to={this.props.location.pathname} onClick={() => deleteComment(comment.id)}> Delete </Link></span>
					</div>
			    </div>
				<hr/>
			  </div>
			  )
	  }
}

export default withRouter(connect(undefined,{ onUpvote: upvoteComment, onDownvote: downvoteComment, deleteComment : ondeleteComment})(SingleComment));