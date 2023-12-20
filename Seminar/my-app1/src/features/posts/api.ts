import { Post } from "./types/Post"

export async function fetchPosts(): Promise<{ posts: Post[] }> {
  const res = await fetch("https://dummyjson.com/posts")
  return res.json()
}
