import {
  GET_ALL_CATEGORIES,
  FETCH_ALL_POSTS,
} from '../actions'


function testfunc(state = [], action)
 {
  switch(action.type) 
  {
	  case FETCH_ALL_POSTS:
		return action.posts
	  case GET_ALL_CATEGORIES:
		return action.categories
	  default:
		return state
  }
}

export default testfunc