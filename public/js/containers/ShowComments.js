import {connect} from 'react-redux';
import ShowComments from '../components/ShowComments';

const mapStateToProps = (state) => {
    return {
        comments: state.showComments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showComments: () => {
            dispatch({type: "SHOWCOMMENTS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);