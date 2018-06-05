import {
  GET_ALL_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
  CREATE_COMMENT,
  EDIT_COMMENT
} from '../actions';

const comments = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_COMMENTS:
      return action.comments;
	case DELETE_COMMENT:
      return [ ...state.filter(comment => comment.id !== action.id) ];
	case UPVOTE_COMMENT:
	  return state.map(c => comment(c, action));
    case DOWNVOTE_COMMENT:
      return state.map(c => comment(c, action));
	case CREATE_COMMENT:
      return [
        ...state,
        action.comment
      ];
    default:
      return state;
  }
}

const comment = (state = {}, action) => {
  switch(action.type) {
    case EDIT_COMMENT:
      if (state.id !== action.comment.id) {
        return state;
      }
      return {
        ...action.comment
      }
    case UPVOTE_COMMENT:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWNVOTE_COMMENT:
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


export default comments;