
// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';

// import App from './exercise26/App';
// import Home from './exercise26/Components/Home';
// import PostDetail from './exercise26/Components/PostDetail';
// import CreatePost from './exercise26/Components/CreatePost';
// import Login from './exercise26/Components/Login';
// import NotFound from './exercise26/Components/NotFound';
// import ProtectedRoute from './exercise26/Components/ProtectedRoute';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'posts/:postId',
//         element: <PostDetail />
//       },
//       {
//         path: 'create',
//         element: (
//           <ProtectedRoute>
//             <CreatePost />
//           </ProtectedRoute>
//         )
//       },
//       {
//         path: 'login',
//         element: <Login />
//       }
//     ]
//   }
// ]);

// export default router;