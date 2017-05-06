export default (state = {exist: false}, action)=> {
    switch (action.type) {
        case 'VERIFY': {
            return {exist: action.result}
        }
    }
    return state;
}
