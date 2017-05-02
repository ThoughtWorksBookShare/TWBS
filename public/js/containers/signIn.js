import {connect} from "react-redux";
import Signin from "../components/signIn";

const mapStateToProps = (state)=> {
    return {
        exist: state.signIn.exist,
    }
}

const mapDispatchToprops = (dispatch)=> {
    return {
        verifyInfo: (inputName, inputPass)=> {
            dispatch({type: 'VERIFY', inputName, inputPass})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Signin)