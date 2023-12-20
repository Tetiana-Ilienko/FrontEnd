import { RootState } from "../../app/store"

export const selectPosts = (state: RootState) => state.posts.posts
//export const isLoading = (state: RootState) => state.posts.isLoading
