import { v4 } from 'uuid';
const api = 'http://localhost:3001'
const OPTION_UPVOTE = 'upVote';
const OPTION_DOWNVOTE = 'downVote';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}
	
export const getPosts = () => {
 return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
}

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
	.then(data => data.categories)
}

const votePost = (option) => (id) => {
  return fetch(`${api}/posts/${id}`,
  {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
	body: JSON.stringify({ option }) 
  })
  .then(res => res.json());
}

export const createPost = (data) => {
  return fetch(`${api}/posts`,
    { 
      method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        ...data,
        id: v4(),
        timestamp: Date.now()
      })
    })
    .then(res => res.json());
}

export const editPost = (id, data) => {
  return fetch(`${api}/posts/${id}`,
    { 
      method: 'PUT',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        ...data
      })
    })
    .then(res => res.json());
}

export const dropPost = (id) => {
  return fetch(`${api}/posts/${id}`,
    { 
      method: 'DELETE',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
    });
}

export const upPost = votePost(OPTION_UPVOTE);
export const downPost = votePost(OPTION_DOWNVOTE);
/*In my-reads we had something like 
{"books":[...]}
So data.books was returning the array.
Here if you see the response you are getting the jsonArray directly [ {....}, {....} ]
So you can use it as is*/