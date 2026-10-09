
import React, { useContext } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link
} from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const PostDetail = () => {
  const { posts } = useContext(PostsContext);

  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = Number(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  const handleNavigation = (direction) => {
    const newId =
      direction === 'next' ? currentId + 1 : currentId - 1;

    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId }
      });
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <button onClick={() => handleNavigation('prev')}
        disabled={!posts.some((p) => p.id === currentId - 1)} >
        Previous
      </button>

      {' '}

      <button onClick={() => handleNavigation('next')}
        disabled={!posts.some((p) => p.id === currentId + 1)}>
        Next
      </button>

      {location.state && (
        <p>
          You navigated here from post ID:{' '}
          {location.state.fromPostId}
        </p>
      )}
    </div>
  );
};

export default PostDetail;