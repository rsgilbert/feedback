import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import q1Reducer from '../features/q1/q1Slice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    q1: q1Reducer,
  },
});
