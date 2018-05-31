import * as ReadableAPI from '../utils/ReadableAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'

export const UPVOTE_POST = 'UPVOTE_POST'

export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export const getAllPosts = () => (dispatch) => {
   return ReadableAPI.getPosts()
    .then((posts) => {
		dispatch({type: FETCH_ALL_POSTS, posts});
})
}


export const getAllCategories = () => (dispatch) => {
  ReadableAPI.getCategories()
    .then((categories) => {
		dispatch({type: GET_ALL_CATEGORIES,categories});
})
}

export const upvotePost = (id) => (dispatch) => {
  ReadableAPI.upPost(id)
    .then((id) => {
		dispatch({type: UPVOTE_POST,id});
})
}

export const downvotePost = (id) => (dispatch) => {
  ReadableAPI.downPost(id)
    .then((id) => {
		dispatch({type: DOWNVOTE_POST,id});
})
}
