import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import instagramReducer from './instagram-reducer';
import infoReducer from './info-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  sectionInstagram: instagramReducer,
  info: infoReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
