import SignUp from "../components/signUp";
import {connect} from "react-redux";

const mapStateToProps = (state)=> {
    return {
        signUp:state.signUp.result
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handleData: (name, password)=> {
            dispatch({type: "SIGNUP", name, password})
        }
    }
}
export  default connect(mapStateToProps, mapDispatchToProps)(SignUp);