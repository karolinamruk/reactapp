// import { useParams } from 'react-router-dom';

// const EditPost = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>Edit Post Page - {id}</h1>
//     </div>
//   );
// };

// export default EditPost;

import EditPostForm from '../features/EditPostForm';

const EditPost = () => {
  return (
    <div>
      <h1 className="mb-4 mt-4">Edit Post</h1>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
