import {
    SET_USERS, EDIT_USERS, SIGNIN_USERS, SET_POSTS, SIGNUP_USERS, SET_DATA, ADD_POST_DATA, ADD_COMMENT_DATA, SET_COMMENT, EDIT_POSTS, USER_LOGOUT, ADD_TASK_DATA,
    SET_TASKS, ADD_DATE, SET_DATE
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
    },
    task: {
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        user: localStorage.getItem("name"),
    },
    tasks: [],
    dates: {
        sDate:'',
        eDate:''
    },
    date:[],


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
        case ADD_TASK_DATA:
            console.log("add task data", action.payload)
            return {
                ...state,
                task: action.payload,

            }
        case SET_TASKS:
            console.log("set tasks", action.payload)
            return {
                ...state,
                tasks: action.payload,
            }
        case ADD_DATE:
            console.log("date", action.payload)
            return {
                ...state,
                dates: action.payload,

            }
            case SET_DATE:
                return {
                    ...state,
                    date: action.payload,
                }
        default:
            return state;
    }
}
export default reducer;