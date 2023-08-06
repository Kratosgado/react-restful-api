import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import { PostsList } from './PostsList';
import { NewPostData, PostData } from './types';
import { assertIsPosts, getPosts } from './getPosts';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';

export function PostsPage() {
   const { isLoading, isFetching, data: posts } = useQuery(['postsData'], getPosts);
   // const data = useLoaderData();
   // assertIsData(data);

   async function handleSave(newPostData: NewPostData) {
      const newPost = await savePost(newPostData);
   }
   if (isLoading || posts === undefined) {
      return (
         <div className='w-96 mx-auto mt-6'>
            Loading ...
         </div>
      );
   };
   return (
      <div className='w-96 mx-auto mt-6'>
         <h2 className='text-xl text-slate-900 font-bold'>
            Posts
         </h2>
         <NewPostForm onSave={handleSave} />
         {/* <Suspense fallback={<div>Fetching...</div>}>
            <Await resolve={data.posts} errorElement={<p>Error!</p>}>
               {(posts) => {
                  assertIsPosts(posts);
                  return <PostsList posts={posts} />
               }}
            </Await>
         </Suspense> */}
        <PostsList posts={posts} />
      
      </div>
   );
}

type Data = {
   posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data{
   if (typeof data !== 'object') {
      throw new Error("Data isn't an object")
   };
   if (data === null) {
      throw new Error('Data is null');
   }
   if(!('posts' in data)) throw new Error("data doesn't contain posts");
   
}