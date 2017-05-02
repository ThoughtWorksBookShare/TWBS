export default (state = {exist: false}, action)=> {
    switch (action.type) {
        case 'VERIFY': {
            console.log(action.result)
            return {exist: action.result}
        }
    }
    return state;
}
