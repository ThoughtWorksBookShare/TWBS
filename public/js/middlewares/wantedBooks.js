import request from "superagent";

export default store => next => action => {
    if (action.type === "GETWANTEDBOOKS") {
        request.get('/getWantedBooks').end((err, res) => {
            next({type: action.type, wantedBooks: res.body});
        })
    } 
    else if(action.type === "CHANGECOUNT"){
        request.post('/changeCount')
            .send({_id: action._id, user: action.user})
            .end((err,res) => {
            next({type: action.type,desiredBooks: res.body.desiredBooks})
        })
    }
    else {
        next(action);
    }
}