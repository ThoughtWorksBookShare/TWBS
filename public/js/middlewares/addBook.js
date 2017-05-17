import request from 'superagent';

export default store=>next=>action=> {
    if(action.type === "updateBookMessage"){
        request.post("/addBook")
            .send({imageDateUrl:action.imageDateUrl,
                bookName:action.bookName,
                bookAuthor:action.bookAuthor,
                bookIntroduction:action.bookIntroduction})
            .end((err,res)=>{
                next({type:action.type})
            })
    }
    else{
        next(action);
    }
}
