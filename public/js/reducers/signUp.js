export default (state = {result: false}, action)=> {
    switch (action.type) {
        case "SIGNUP": {
            return {result: action.result}
        }
    }
    return state;
}