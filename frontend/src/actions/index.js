import * as ReadableAPI from '../utils/ReadableAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'

export const UPVOTE_POST = 'UPVOTE_POST'

export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export const CREATE_POST = 'CREATE_POST'

export const EDIT_POST = 'EDIT_POST'

export const DELETE_POST = 'DELETE_POST'

export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'

export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'

export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export const DELETE_COMMENT = 'DELETE_COMMENT'

export const CREATE_COMMENT = 'CREATE_COMMENT'

export const EDIT_COMMENT = 'EDIT_COMMENT'

export const SORT_VOTES_LH = 'SORT_VOTES_LH'

export const SORT_VOTES_HL = 'SORT_VOTES_HL'

export const SORT_TIME_LH = 'SORT_TIME_LH'

export const SORT_TIME_HL = 'SORT_TIME_HL'

export const SORT_COM_VOTES_LH = 'SORT_COM_VOTES_LH'

export const SORT_COM_VOTES_HL = 'SORT_COM_VOTES_HL'

export const SORT_COM_TIME_LH = 'SORT_COM_TIME_LH'

export const SORT_COM_TIME_HL = 'SORT_COM_TIME_HL'

export const getAllPosts = () => (dispatch) => {
   return ReadableAPI.getPosts()
    .then((posts) => {
		dispatch({type: FETCH_ALL_POSTS, posts})
})
}


export const getAllCategories = () => (dispatch) => {
  ReadableAPI.getCategories()
    .then((categories) => {
		dispatch({type: GET_ALL_CATEGORIES,categories})
})
}

export const upvotePost = (id) => (dispatch) => {
  ReadableAPI.upPost(id)
    .then((id) => {
		dispatch({type: UPVOTE_POST,id})
})
}

export const downvotePost = (id) => (dispatch) => {
  ReadableAPI.downPost(id)
    .then((id) => {
		dispatch({type: DOWNVOTE_POST,id})
})
}

export const makeNewPost = (data) => (dispatch) => {
  ReadableAPI.createPost(data)
    .then(post => {
		dispatch({type: CREATE_POST,post})
	});
}

export const onEditPost = (id, data) => (dispatch) => {
  ReadableAPI.editPost(id, data)
    .then(post => {dispatch({type: EDIT_POST,post})
	})
}

export const ondeletePost = (id) => (dispatch) => {
  ReadableAPI.dropPost(id)
    .then(() => {dispatch({type: DELETE_POST,id})
	})
}

export const getComments = (id) => (dispatch) => {
   return ReadableAPI.getComments(id)
    .then((comments) => {
		dispatch({type: GET_ALL_COMMENTS, comments})
})
}

export const upvoteComment = (id) => (dispatch) => {
  ReadableAPI.upComment(id)
    .then((id) => {
		dispatch({type: UPVOTE_COMMENT,id})
})
}

export const downvoteComment = (id) => (dispatch) => {
  ReadableAPI.downComment(id)
    .then((id) => {
		dispatch({type: DOWNVOTE_COMMENT,id})
})
}

export const ondeleteComment = (id,parentId) => (dispatch) => {
  ReadableAPI.dropComment(id)
    .then(() => {dispatch({type: DELETE_COMMENT,id,parentId})
	})
}

export const addComment = (parentId,comment) => (dispatch) => {
  ReadableAPI.addnewcomment(parentId,comment)
    .then((comment) => {
		dispatch({type: CREATE_COMMENT,parentId,comment})
	});
}

export const oneditComment = (id, comment) => (dispatch) => {
  ReadableAPI.editComment(id, comment)
    .then(comment => {dispatch({type: EDIT_COMMENT,comment})
	})
}

export const sortvscoreLH = () => ({
    type: SORT_VOTES_LH
});
export const sortvscoreHL = () => ({
    type: SORT_VOTES_HL
});
export const sorttimestampLH = () => ({
    type: SORT_TIME_LH
});
export const sorttimestampHL = () => ({
    type: SORT_TIME_HL
});

export const sortCOMvscoreLH = () => ({
    type: SORT_COM_VOTES_LH
});
export const sortCOMvscoreHL = () => ({
    type: SORT_COM_VOTES_HL
});
export const sortCOMtimestampLH = () => ({
    type: SORT_COM_TIME_LH
});
export const sortCOMtimestampHL = () => ({
    type: SORT_COM_TIME_HL
});