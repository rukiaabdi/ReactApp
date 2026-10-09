
import React, { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      id: 2,
      title: 'Understanding React Router',
      content: 'React Router helps us navigate between pages.'
    },
    {
      id: 3,
      title: 'React Hooks in Depth',
      content: 'React Hooks help us use state and other React features.'
    }
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...post,
        id: Math.max(0, ...prevPosts.map((p) => p.id)) + 1
      }
    ]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};