import {
    SET_USERS, EDIT_USERS, SIGNIN_USERS, SET_POSTS, SIGNUP_USERS, SET_DATA, ADD_POST_DATA, ADD_COMMENT_DATA, SET_COMMENT, EDIT_POSTS, USER_LOGOUT
} from "../Actions/action";

const initialState = {
    records: {},
    users: [],
    posts: [],
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    register: {
        name: '',
        email: '',
        city: '',
        field: '',
        password: '',
    },
    login: {
        email: '',
        password: ''
    },

    addPost: {
        title: '',
        body: '',
        userId: localStorage.getItem("id"),

    },
    addComment: {
        PostID: '',
        body: '',
        name: localStorage.getItem("name"),
    },
    comments: [],
    editPosts: {
        title: '',
        body: '',
    },
    editUsers: {
        name: '',
        email: '',
        city: '',
        field: '',
        password: ''
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SIGNIN_USERS:
            console.log('login');
            console.log(action.payload)
            console.log(action.payload.name)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.id,
                name: action.payload.name,
            }

        case SIGNUP_USERS:
            console.log('register');
            console.log(action.payload)

            return {
                ...state,
                register: action.payload,
            }

        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case EDIT_USERS:
            console.log(action.payload)
            return {
                ...state,
                editUsers: { ...state.editUsers, ...action.payload },
            }

        case SET_POSTS:
            console.log("posts", action.payload)
            return {
                ...state,
                posts: action.payload,
            }
        case SET_DATA:
            console.log("signin data", action.payload);
            return {
                ...state,
                login: action.payload,
            }

        case ADD_POST_DATA:
            console.log("add post data", action.payload)
            return {
                ...state,
                addPost: action.payload,

            }
        case EDIT_POSTS:
            console.log(action.payload)
            return {
                ...state,
                editPosts: { ...state.editPosts, ...action.payload },
            }

        case ADD_COMMENT_DATA:
            console.log("add comment data", action.payload)
            return {
                ...state,
                addComment: action.payload,
            }
            
        case SET_COMMENT:
            console.log("comments", action.payload)
            return {
                ...state,
                comments: action.payload,
            }
            case USER_LOGOUT:
                return {
                    ...state,
                    token: null,
                }

        default:
            return state;
    }
}
export default reducer;