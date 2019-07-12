import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


const initialState = {
    comments: [],
    users: []
};

addComment = text => {
    return {
        type: ADD_COMMENT,
        text: 'My first comment !'
    }
}

removeComment = text => {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

editComment = text => {
    return {
        type: EDIT_COMMENT,
        id: uuid.v4(),
        text: 'new comment', from: "old comment"
    }
}

thumbUpComment = text => {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4(),
        votes: ++ 1
    }
}

thumbDownComment = text => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4(),
        votes: -- 1
    }
}


/*
dispatch(addComment('nowy komentarz!'));
dispatch(addComment('kolejny nowy komentarz!'));

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');

*/