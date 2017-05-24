export default (state = {
    bookPicture: "",
    bookName: "",
    bookAuthor: "",
    bookIntroduction: "",
    bookOwner: "",
    bookStatus: false,
    bookComments: []
}, action) => {
    if (action.type === "GETBOOK") {
        return action.bookInfo;
    }
    if (action.type === "ADDCOMMENT") {
        return action.book;
    }

    return state;
}
