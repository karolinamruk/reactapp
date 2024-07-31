//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const DELETE_POST = 'app/posts/DELETE_POST';

// action creators
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
//reducer

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post) => post.id !== action.payload);

    default:
      return statePart;
  }
};

export default postsReducer;
