import {connect} from 'react-redux';
import ShowBooks from '../components/ShowBooks';

const mapStateToProps = (state) => {
    return {bookList: state.showBooks.bookList};
};

export default connect(mapStateToProps)(ShowBooks);