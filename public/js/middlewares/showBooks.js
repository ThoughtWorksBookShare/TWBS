import request from "superagent";

export default store =>next=>action=> {

    if (action.type === "SHOWBOOKS") {

        request.get('/showBooks')
            .end((err, res)=> {
                next({type: action.type, bookList: res.body});
            })
    }

    else {
        next(action);
    }
}