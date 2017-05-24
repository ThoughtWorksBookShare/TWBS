import request from "superagent";

export default store => next => action => {
    if (action.type === "ADDCOMMENT") {
        request.post('/addBookComment')
            .send({needComment: action.needComment})
            .end((err, res) => {
                next({type: action.type, book: res.body});
            })
    }

    else {
        next(action);
    }
}