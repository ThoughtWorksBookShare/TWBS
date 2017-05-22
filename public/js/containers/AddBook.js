import {connect} from "react-redux";
import AddBook from "../components/AddBook";

const mapStateToProps = (state)=> {
    return {
        imgdataUrl: state.addBook.imgdataUrl,
        result:state.addBook.result
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
