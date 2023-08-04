import { PostData } from './types';

export async function getPosts() {
   const response = await fetch(
      process.env.REACT_APP_API_URL!
   );
   const body = (await response.json()) as unknown
   assertIsPosts(body)
   return body;
}

export function assertIsPosts(postsData: unknown): asserts postsData is PostData[]{
   
   // check if the data is an array
   if (!Array.isArray(postsData)) throw new Error("posts isn't an array");
   
   // check if the data is not empty
   if (postsData.length === 0) return;

   // assert each post in data
   postsData.forEach((post) => {
      if (!('id' in post)) throw new Error("post doesn't cotain id"); // check if post has id
      if (typeof post.id !== 'number') throw new Error("id is not a number"); // check if id is a number

      if (!('title' in post)) throw new Error("post doesn't cotain title"); // check if post has title
      if (typeof post.title !== 'string') throw new Error("title is not a string"); // check if id is a string

      if (!('description' in post)) throw new Error("post doesn't cotain description"); // check if post has description
      if (typeof post.description !== 'string') throw new Error("description is not a string"); // check if id is a number
      
   })
}