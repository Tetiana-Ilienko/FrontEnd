import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
// import { fetchPosts } from "./api"
import * as api from "./api"
import PostsState from "./types/state"

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
}

// GET
export const getPostsAsync = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      return await api.fetchPosts()
    } catch (error: any) {
      console.log("Hello from Posts")

      console.log("postsError", error)
      console.log(error)

      return thunkAPI.rejectWithValue(error.message)
    }
    // action.payload
  },
)

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload.posts
      })
      .addCase(getPostsAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.isLoading = false
        state.posts = []
        state.error = action.payload as string
      })
  },
})

export default postsSlice.reducer
