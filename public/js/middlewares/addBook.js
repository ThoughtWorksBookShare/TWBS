import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "updateBookMessage"){
        request.post("/addBook")
            .send({imageDateUrl:action.imageDateUrl})
            .end((err,res)=>{
                next({type:action.type})
            })
    }
    else{
        next(action);
    }
}
