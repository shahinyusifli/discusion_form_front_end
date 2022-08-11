import { configureStore } from '@reduxjs/toolkit'
import topicsReducer from './components/Topic/topicSlice'

export const store = configureStore({
    reducer:{
        topics: topicsReducer, 
    }
})