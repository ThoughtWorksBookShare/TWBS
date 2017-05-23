import request from "superagent";

export default store => next => action => {
    if (action.type === "GETBOOK") {
        request.post('/getBook')
            .send({bookId: action.bookId})
            .end((err, res) => {
                next({type: action.type, bookInfo: res.body})
            })
    }

    else {
        next(action);
    }
}