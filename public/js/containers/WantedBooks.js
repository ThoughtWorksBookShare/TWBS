import {connect} from 'react-redux';
import WantedBooks from '../components/WantedBooks';

const mapStateToProps = (state) => {
    console.log(state.wantedBooks.desiredBooks);
    return {
        desiredBooks:state.wantedBooks.desiredBooks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWantedBooks: () => {
            dispatch({type: "GETWANTEDBOOKS"});
        },
        changeCount: (_id,user) => {
            dispatch({type:"CHANGECOUNT",_id,user})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WantedBooks);