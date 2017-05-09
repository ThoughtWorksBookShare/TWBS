export default (state = {result: 0}, action)=> {
    switch (action.type) {
        case "SIGNUP": {
            return {result: action.result}
        }
    }
    return state;
}