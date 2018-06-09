import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { getComments, addComment, sortCOMvscoreLH, sortCOMvscoreHL, sortCOMtimestampLH, sortCOMtimestampHL } from '../actions'
import SingleComment from './SingleComment'
import Modal from 'react-modal'
import serializeForm from 'form-serialize'

class Comments extends Component {
	
	componentWillMount() {
    Modal.setAppElement('body');
	}
	componentDidMount() {
	this.props.fetchcomments(this.props.postid)
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
		this.props.makeComment(this.props.postid,values);
	}
	
	render() {		
		console.log(this.props.comments)
		return (
		
		<div>
		<h2>Comments</h2>
		<div>
				<span>Sort Comments by : </span>
				<button onClick={() => this.props.vscoreLH()}>Number of Votes : Low to High</button>
				<button onClick={() => this.props.vscoreHL()}>Number of Votes : High to Low</button>
				<button onClick={() => this.props.timestampLH()}>Date Added : Low to High</button>
				<button onClick={() => this.props.timestampHL()}>Date Added : High to Low</button>

		</div>
			{this.props.comments && this.props.comments.map(c =>
			  <div key = {c.id}>
				<SingleComment comment = {c}/>
		      </div>
			  )}

		<div>
			<button onClick={this.openCommentForm}> Add Comment </button>
		</div>

		
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
			<input type = 'text' name = 'author' placeholder = 'Enter your Name' />
			<input type = 'text' name = 'body' placeholder = 'Enter Comments' />
			<button>Submit</button>
			</form>
			<button onClick={this.closeCommentForm}>Close</button>
		</div>
		}
        </Modal>
		
		</div>
		)
	}
}

function mapStateToProps({comments}) {
  return {
    comments
  }
}

export default withRouter(connect(mapStateToProps, { fetchcomments : getComments, makeComment : addComment, vscoreLH : sortCOMvscoreLH, vscoreHL : sortCOMvscoreHL, timestampLH : sortCOMtimestampLH, timestampHL : sortCOMtimestampHL })(Comments));