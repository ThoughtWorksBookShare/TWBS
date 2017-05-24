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
            dispatch({type: 'ADDBOOK', imgdataUrl})
        },
        updateBookMessage:(imageDateUrl,bookName,bookAuthor,bookIntroduction,bookOwner)=>{
            dispatch({type:'UPDATEBOOKMESSAGE',imageDateUrl,bookName,bookAuthor,bookIntroduction,bookOwner})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToprops)(AddBook)
