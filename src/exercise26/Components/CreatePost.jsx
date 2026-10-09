
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
54
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost({ title: title.trim(), content: content.trim() });

    navigate('/');
  };

  return (
    <div>
      <h2>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:{' '}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
        </div>

        <br />

        <div>
          <label>
            Content:{' '}
            <textarea value={content}onChange={(e) => setContent(e.target.value)} required/>
          </label>
        </div>

        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;