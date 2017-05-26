import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === "UPDATEDESIREDBOOKMESSAGE") {
        request.post("/addDesiredBook")
            .send({
                imageDateUrl: action.imageDateUrl,
                desiredBookName: action.desiredBookName,
                desiredBookAuthor: action.desiredBookAuthor,
                user: action.user
            })
            .end((err, res)=> {
                next({type: action.type, result: res.text})
            })
    }
    else {
        next(action);
    }
}

