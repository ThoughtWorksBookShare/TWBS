import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "UPDATEBOOKMESSAGE"){
        request.post("/addBook")
            .send({imageDateUrl:action.imageDateUrl,
                bookName:action.bookName,
                bookAuthor:action.bookAuthor,
                bookIntroduction:action.bookIntroduction,
                bookOwner:action.bookOwner
            })
            .end((err,res)=>{
                next({type:action.type,result:res.text})
            })
    }
    else{
        next(action);
    }
}
