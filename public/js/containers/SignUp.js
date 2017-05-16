import {connect} from "react-redux";
import SignUp from "../components/SignUp";

const mapStateToProps = (state)=> {
    return {
        signUp: state.signUp.result
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