import request from "superagent";

export default store=>next=>action=> {
    if (action.type === "VERIFY") {
        request.post('/verifyInfo')
            .send({inputName: action.inputName, inputPass: action.inputPass})
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action)
    }
}