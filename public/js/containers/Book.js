import {connect} from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
};

export default connect(mapStateToProps)(Book);