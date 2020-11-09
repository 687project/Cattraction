import {combineReducers} from "redux-immutable";
import homeReducer from './home'
import postReducer from './post'
import authReducer from './auth'
import userReducer from './user'

const rootReducer = combineReducers({
    home: homeReducer,
    post: postReducer,
    auth: authReducer,
    user: userReducer
})

export default rootReducer;