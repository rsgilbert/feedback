import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import q1Reducer from '../features/q1/q1Slice'
import searchReducer from '../features/search/searchSlice'
import q2Reducer from '../features/q2/q2Slice'
import q3Reducer from '../features/q3/q3Slice'
import otherReducer from '../features/other/otherSlice'
import q4Reducer from '../features/q4/q4Slice'
import q5Reducer from '../features/q5/q5Slice'
import q6Reducer from '../features/q6/q6Slice'
import dashboardReducer from '../features/dashboard/dashboardSlice'
import commentReducer from '../features/comment/commentSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    q1: q1Reducer,
    search: searchReducer,
    q2: q2Reducer,
    q3: q3Reducer,
    other: otherReducer,
    q4: q4Reducer,
    q5: q5Reducer,
    q6: q6Reducer,
    dashboard: dashboardReducer,
    comment: commentReducer,
  },
});
