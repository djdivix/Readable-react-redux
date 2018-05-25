import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'
import { Link } from 'react-router-dom';

class Listcategories extends Component {
	
componentDidMount() {
	this.props.fetchcategories()
}
  render() {

    return (
	  <div>
		<h2> Categories </h2>
		  <span>
		 {this.props.categories && this.props.categories.map(c => 
		 <Link to={`${c.path}`}>
		  <span key={c.name}>{c.name}</span>
		  </Link>
		  )}
		  </span>
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps, {fetchcategories : getAllCategories})(Listcategories);