import { SET_USERS, EDIT_USERS, } from "../Actions/action";
const initialState = {
    records: {},
    users: [],
    // loading: true

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

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