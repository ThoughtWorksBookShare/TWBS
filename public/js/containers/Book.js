import {connect} from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBookInfo: (bookId) => {
            dispatch({type: "GETBOOK", bookId})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Book);