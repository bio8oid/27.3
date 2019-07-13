import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'


comments = (state = [], action) => {
    switch(action.type) {

        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                }
                , ...state]
            })

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });   

        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        ...state, text: action.text
                    }
                 ]
            });

        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        votes: action.votes
                    }   
                    , ...state]    
            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                    comments: [
                        {
                            id: action.id,
                            votes: action.votes
                        }  
                    , ...state]     
                });

        default:
            return state;
    }
    
}