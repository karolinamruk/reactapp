//selectors
export const getAllPosts = (state) => state.posts;

export const getPostById = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;

const DELETE_POST = createActionName('DELETE_POST');

const CREATE_POST = createActionName('ADD_POST');

const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });

export const addPost = (post) => ({ type: CREATE_POST, payload: post });

export const editPost = (payload) => ({ type: EDIT_POST, payload });
//reducer

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter((post) => post.id !== action.payload);

    case CREATE_POST:
      return [...statePart, { id: Date.now().toString(), ...action.payload }];

    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

    default:
      return statePart;
  }
};

export default postsReducer;
