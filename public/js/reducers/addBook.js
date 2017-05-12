export default (state = {imgdataUrl:''}, action)=> {
    switch (action.type) {
        case 'addBook': {
            return {imgdataUrl: action.imgdataUrl}
        }
    }
    return state;
}
