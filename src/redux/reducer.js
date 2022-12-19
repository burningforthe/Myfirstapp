const initState ={
    get_data: "",
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'DATA':
            return {
                ...state,
                get_data: action.payload
            }
        
        default:
            return state
    }
}