import {connect} from 'react-redux';
import WantedBooks from '../components/WantedBooks';

const mapStateToProps = (state) => {
    return {
        desiredBooks:state.wantedBooks.desiredBooks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWantedBooks: () => {
            dispatch({type: "GETWANTEDBOOKS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WantedBooks);