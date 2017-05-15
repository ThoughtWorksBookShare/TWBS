export default (state = {bookList: []}, action)=> {
    if (action.type === "SHOWBOOKS") {
        return {bookList: action.bookList}
    }
    return state;
}