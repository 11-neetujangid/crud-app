import { SET_USERS, EDIT_USERS, SIGNIN_USERS, } from "../Actions/action";

const initialState = {
    records: {},
    users: [],
    token: localStorage.getItem("token"),

}

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case SIGNIN_USERS:
            console.log('login');
            console.log(action.payload)
            return {
                ...state,
                token: action.payload.token,

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
                records: { ...state.records, ...action.payload },

            }

        default:
            return state
    }
}
export default reducer;