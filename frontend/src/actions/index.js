import * as ReadableAPI from '../utils/ReadableAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'



export const getAllPosts = () => (dispatch) => {
   ReadableAPI.getPosts()
    .then(posts => dispatch(fetchposts(posts)));
}

const fetchposts = (posts) => {
  return {
    type: FETCH_ALL_POSTS,
    posts
  }
}



export const getAllCategories = () => (dispatch) => {
  ReadableAPI.getCategories()
    .then(categories => dispatch(fetchcat(categories)));
}

const fetchcat = (categories) => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}
