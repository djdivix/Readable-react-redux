import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { upvoteComment, downvoteComment, ondeleteComment, oneditComment } from '../actions';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal'
import serializeForm from 'form-serialize'

class SingleComment extends Component {
	
	componentWillMount() {
    Modal.setAppElement('body');
	}
	
	state={
		commentformopen: false,
	}
	openCommentForm = () => this.setState(() => ({ commentformopen: true }))
    closeCommentForm = () => this.setState(() => ({ commentformopen: false }))
	
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash:true})
		console.log(values)
		this.props.editComment(this.props.comment.id,values);
	}
	
	  render() {
			const { comment, onUpvote, onDownvote, deleteComment } = this.props;
			  return ( 
			  <div>

				<div>{comment.body} </div>
				<div>{comment.author}</div>
				<div className = "Postauthor">Added on {new Date(comment.timestamp).toLocaleString()}</div>
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
						<span><Link to={this.props.location.pathname} onClick={this.openCommentForm}> Edit </Link></span>
						<Modal
							className='modal'
							overlayClassName='overlay'
							isOpen={this.state.commentformopen}
							onRequestClose={this.closeCommentForm}
							contentLabel='Modal'
							>
							{this.state.commentformopen &&
							<div>
								<form onSubmit = {this.handleSubmit}>
								<input type = 'text' name = 'author' placeholder = 'Enter your Name' defaultValue= {this.props.comment.author}/>
								<input type = 'text' name = 'body' placeholder = 'Enter Comments' defaultValue= {this.props.comment.body}/>
								<button>Done</button>
								</form>
								<button onClick={this.closeCommentForm}>Close</button>
							</div>
							}	
						</Modal>
						<span><Link to={this.props.location.pathname} onClick={() => deleteComment(comment.id,comment.parentId)}> Delete </Link></span>
					</div>
			    </div>
				<hr/>
			  </div>
			  )
	  }
}

export default withRouter(connect(undefined,{ onUpvote: upvoteComment, onDownvote: downvoteComment, deleteComment : ondeleteComment, editComment : oneditComment})(SingleComment));