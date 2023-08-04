import { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom'

import { PostsList } from './PostsList';
import { NewPostData, PostData } from './types';
import { getPosts, assertIsPosts } from './getPosts';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';

export function PostsPage() {
   const posts = useLoaderData();
   assertIsPosts(posts)

   async function handleSave(newPostData: NewPostData) {
      const newPost = await savePost(newPostData);
   }


   return (
      <div className='w-96 mx-auto mt-6'>
         <h2 className='text-xl text-slate-900 font-bold'>
            Posts
         </h2>
         <NewPostForm onSave={handleSave} />
         <PostsList posts={posts} />
      </div>
   );
}