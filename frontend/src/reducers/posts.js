import { FETCH_ALL_POSTS,
	UPVOTE_POST,
	DOWNVOTE_POST } from '../actions'

function posts(state = [], action)
 {
  switch(action.type) 
  {
	  case FETCH_ALL_POSTS:
		return action.posts
	  case UPVOTE_POST:
		return state.map(p => singlepost(p, action));
      case DOWNVOTE_POST:
        return state.map(p => singlepost(p, action));
	  default:
		return state
  }
}

function singlepost(state = {}, action) 
 {
  switch(action.type)
  {
	  case UPVOTE_POST:
      if (state.id != action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWNVOTE_POST:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    default:
      return state;
  }
 }
 

export default posts