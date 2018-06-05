import * as ReadableAPI from '../utils/ReadableAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'

export const UPVOTE_POST = 'UPVOTE_POST'

export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export const CREATE_POST = 'CREATE_POST'

export const EDIT_POST = 'EDIT_POST'

export const DELETE_POST = 'DELETE_POST'

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
