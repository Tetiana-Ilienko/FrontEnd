import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectPosts } from "./selectors"
import { getPostsAsync } from "./postsSlice"
import { getProducts } from "../products/productsSlice"

export default function PostsList() {
  const posts = useAppSelector(selectPosts)
  const { isLoading, error } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPostsAsync())
    dispatch(getProducts())
  }, [dispatch])
  return (
    <ul>
      {error && <p>{error}</p>}
      {isLoading && <h1>Loading....</h1>}
      {posts.map((post) => (
        <li key={`post-${post.id}`}>{post.title}</li>
      ))}
    </ul>
  )
}
