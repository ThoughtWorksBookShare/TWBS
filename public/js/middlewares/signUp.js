import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'SIGNUP'){
        request.post('/signUp')
            .send({name:action.name,password:action.password})
            .end((err,res)=>{
                if (res.ok) {
                    alert('OK');
                } else {
                    alert('Oh no! error ');
                }
            })
    }
    else{
        next(action);
    }
}