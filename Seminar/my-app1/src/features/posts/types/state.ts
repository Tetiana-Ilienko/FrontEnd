import { Post } from "./Post"

export default interface PostState {
  posts: Post[]
  isLoading: boolean
  error: string | null
}
