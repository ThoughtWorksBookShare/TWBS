import {connect} from "react-redux";
import AddBook from "../components/addBook";

const mapStateToProps = (state)=> {
    return {
        imgdataUrl: state.addBook.imgdataUrl
    }
};

const mapDispatchToprops = (dispatch)=> {
    return {
        getImgData: (imgdataUrl)=> {
            dispatch({type: 'addBook', imgdataUrl})
        },
        updateBookMessage:(imageDateUrl,bookName,bookAuthor,bookIntroduction)=>{
            dispatch({type:'updateBookMessage',imageDateUrl,bookName,bookAuthor,bookIntroduction})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(AddBook)
