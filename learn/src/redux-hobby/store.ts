import { createStore, combineReducers } from 'redux';
import { hobbyReducer } from './redux/reducers/hobby';
const rootReducer = combineReducers({
  hobbies: hobbyReducer
});
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export default store;
