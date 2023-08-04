import React from 'react';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import { getPosts } from './posts/getPosts';

import './App.css';
import { PostsPage } from './posts/PostsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
    loader: async () => defer({posts: getPosts()})
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
