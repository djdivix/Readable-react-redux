import { FETCH_ALL_POSTS,
	UPVOTE_POST,
	DOWNVOTE_POST,
	CREATE_POST,
	EDIT_POST,
	DELETE_POST} from '../actions'

function posts(state = [], action)
 {
  switch(action.type) 
  {
	  case FETCH_ALL_POSTS:
		return action.posts
	  case CREATE_POST:
      return [
        ...state,
        action.post
      ];
	  case EDIT_POST:
      return state.map(p => singlepost(p,action));
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
	case EDIT_POST:
      if (state.id !== action.post.id) {
        return state;
      }  
	case DELETE_POST:
      return state.map(post => post.id !== action.id)
	
    default:
      return state;
  }
 }
 

export default posts;