import { FETCH_ALL_POSTS,
	UPVOTE_POST,
	DOWNVOTE_POST,
	CREATE_POST,
	EDIT_POST,
	DELETE_POST,
	SORT_TIME_LH,
	SORT_TIME_HL,
	SORT_VOTES_LH,
	SORT_VOTES_HL} from '../actions'

function posts(state = [], action)
 {
  switch(action.type) 
  {
	  case FETCH_ALL_POSTS:
		return action.posts;
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
	  case DELETE_POST:
		return [ ...state.filter(post => post.id !== action.id) ];
	  case SORT_VOTES_LH:
		return [...state].sort((a, b) => {
                return a.voteScore - b.voteScore;
            });
	  case SORT_VOTES_HL:
		return [...state].sort((a, b) => {
                return b.voteScore - a.voteScore;
            });
	  case SORT_TIME_LH:
		return [...state].sort((a, b) => {
				return a.timestamp - b.timestamp;
			});
	  case SORT_TIME_HL:
		return [...state].sort((a, b) => {
				return b.timestamp - a.timestamp;
            });
	  
	  default:
		return state
  }
}

function singlepost(state = {}, action) 
 {
  switch(action.type)
  {
	case UPVOTE_POST:
	console.log("action")
	console.log(action)
	console.log("state")
	console.log(state)
      if (state.id !== action.id.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWNVOTE_POST:
      if (state.id !== action.id.id) {
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
	  return {
        ...action.post
      }
    default:
      return state;
  }
 }
 

export default posts;