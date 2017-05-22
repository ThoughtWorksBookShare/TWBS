export default (state = {imgdataUrl:'',result:''}, action)=> {
    switch (action.type) {
        case 'addBook': {
            return {imgdataUrl: action.imgdataUrl}
        }
        case 'updateBookMessage': {
            return {result:action.result}
        }
    }
    return state;
}
