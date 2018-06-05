import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize'
import { makeNewPost, onEditPost } from '../actions';

class NewPost extends Component {

	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash:true})
		console.log(values)
		if(this.props.match.url.indexOf('edit') !== -1) {
        this.props.editPost(this.props.match.params.id, values);
		}
		else{
		this.props.makePost(values);
		}
		this.props.history.goBack();
	}
	render() {

	const isEdit = this.props.match.url.indexOf('edit') !== -1;
    return (
	
      <div>
	  <form onSubmit = {this.handleSubmit}>
			<input type = 'text' name = 'title' placeholder = 'Title' defaultValue= {isEdit ? this.props.post.title : ''} />
			<input type = 'text' name = 'author' placeholder = 'Author' defaultValue= {isEdit ? this.props.post.author : ''}/>
			<select name = 'category'  defaultValue={isEdit ? this.props.post.category : "Categories"}>
				<option value="Categories" disabled>Categories</option>
				<option value="react">React</option>
				<option value="redux">Redux</option>
				<option value="udacity">Udacity</option>
			</select>
			<input type = 'text' name = 'body' placeholder = 'Body' defaultValue= {isEdit ? this.props.post.body : ''}/>
			{isEdit?
			<button>Edit</button> :
			<button>Submit</button>
			}
	  </form>
	  </div>

	)
	}
	}
export default withRouter(connect(undefined, { makePost : makeNewPost, editPost : onEditPost })(NewPost));
