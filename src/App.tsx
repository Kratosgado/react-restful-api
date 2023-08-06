import React from 'react';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import { getPosts } from './posts/getPosts';
import './App.css';
import { PostsPage } from './posts/PostsPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
    loader: async () => defer({posts: getPosts()})
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />;
    </QueryClientProvider>
  )
}
export default App;
