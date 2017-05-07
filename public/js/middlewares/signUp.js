import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'SIGNUP'){
        request.post('/signUp')
            .send({name:action.name,password:action.password})
            .end((err,res)=>{
                next({type:action.type,result:res.body})
            })
    }
    else{
        next(action);
    }
}