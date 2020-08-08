import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import q1Reducer from '../features/q1/q1Slice'
import searchReducer from '../features/search/searchSlice'




export default configureStore({
  reducer: {
    counter: counterReducer,
    q1: q1Reducer,
    search: searchReducer,
  },
});
