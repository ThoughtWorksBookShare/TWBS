export default (state = {exist: 0}, action)=> {
    switch (action.type) {
        case 'VERIFY': {
            return {exist: action.result}
        }
    }
    return state;
}
