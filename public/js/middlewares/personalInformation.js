import request from 'superagent';

export default store => next => action => {
    if (action.type === "GETPERSONALINFORMATION") {
        request.get("/getPersonalInformation")
            .end((err, res) => {
                next({type: action.type, personalInformation: res.body});
            });
    }
    else {
        next(action);
    }
}