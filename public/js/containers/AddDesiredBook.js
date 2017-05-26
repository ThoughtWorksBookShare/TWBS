import {connect} from "react-redux";
import AddDesiredBook from "../components/AddDesiredBook";

const mapStateToProps = (state)=> {
    return {
        imgdataUrl: state.addDesiredBook.imgdataUrl,
        result: state.addDesiredBook.result
    }
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getDesiredImgData: (imgdataUrl)=> {
            dispatch({type: 'ADDDESIREDBOOK', imgdataUrl})
        },
        updateDesiredBookMessage: (imageDateUrl, desiredBookName, desiredBookAuthor, user)=> {
            dispatch({type: 'UPDATEDESIREDBOOKMESSAGE', imageDateUrl, desiredBookName, desiredBookAuthor, user})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(AddDesiredBook)
