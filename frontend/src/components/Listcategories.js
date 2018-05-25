import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'
import { Link, withRouter } from 'react-router-dom';

	
class Listcategories extends Component {
		
componentDidMount() {
	this.props.fetchcategories()
}
  render() {
	  {console.log(this.props.location)}
    return (
	<div>
		<div>
		<h4>Categories</h4>
		</div>
		<div >
		{this.props.categories.map(c => (
		<span key={c.name}>
			{this.props.location.pathname == `/categories/${c.path}` ? <span>{c.name}</span> : <Link to={`/categories/${c.path}`}>{c.name}</Link>}
		</span>
    ))}
    </div>
  </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps, {fetchcategories : getAllCategories})(Listcategories));