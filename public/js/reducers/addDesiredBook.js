export default (state = {imgdataUrl: '', result: ''}, action)=> {
    switch (action.type) {
        case 'ADDDESIREDBOOK':
        {
            return {imgdataUrl: action.imgdataUrl}
        }
        case 'UPDATEDESIREDBOOKMESSAGE':
        {
            return {result: action.result}
        }
    }
    return state;
}
