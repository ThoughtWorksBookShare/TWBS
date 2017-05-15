import {connect} from "react-redux";
import ShowBooks from "../components/ShowBooks";

const mapStateToProps = (state) => {
    return {bookList: state.showBooks.bookList};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        showBooks: ()=> {
            dispatch({type: "SHOWBOOKS"});
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowBooks);