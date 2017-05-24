export default (state = {imgdataUrl:'',result:''}, action)=> {
    switch (action.type) {
        case 'ADDBOOK': {
            return {imgdataUrl: action.imgdataUrl}
        }
        case 'UPDATEBOOKMESSAGE': {
            return {result:action.result}
        }
    }
    return state;
}
