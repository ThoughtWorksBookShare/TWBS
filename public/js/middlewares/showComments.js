import request from 'superagent';

export default store => next => action => {
    if (action.type === "SHOWCOMMENTS") {
        request.get('/showComments').end((err, res) => {
            next({type: action.type, comments: res.body});
        });
    }
    else {
        next(action);
    }
}