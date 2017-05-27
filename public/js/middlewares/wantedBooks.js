import request from "superagent";

export default store => next => action => {
    if (action.type === "GETWANTEDBOOKS") {
        request.get('/getWantedBooks').end((err, res) => {
            next({type: action.type, wantedBooks: res.body});
        })
    } else {
        next(action);
    }
}