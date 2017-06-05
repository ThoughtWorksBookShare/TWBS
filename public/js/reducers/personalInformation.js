export default (state = {
    personalMessage: {headPortrait: "../images/logo.jpg", name: "yangzhanmei", password: "123456"},
    myBooks: [{
        bookPicture: "../images/logo.jpg",
        bookName: "自控力",
        bookAuthor: "白影",
        bookIntroduction: "这是一本描述自控力的书",
        bookStatus: false
    }],
    myWantedBooks: [{
        bookName: "自控力",
        bookAuthor: "白影"
    }],
    myComments:[{
        bookPicture: "../images/logo.jpg",
        bookName: "自控力",
        comments:"哈哈哈哈"
    }]
}, action) => {

    return state;
}