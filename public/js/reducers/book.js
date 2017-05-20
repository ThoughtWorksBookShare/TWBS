export default (state = {},action) => {
    if(action.type === "GETBOOK"){
        return action.bookInfo;
    }
    return state;
}
