import {combineReducers, legacy_createStore as createStore} from "redux";
import instagramReducer from './instagram-reducer';
import infoReducer from './info-reducer';

let reducers = combineReducers({
    sectionInstagram: instagramReducer,
    info: infoReducer
})

let store = createStore(reducers);

window.store = store;

export default store;