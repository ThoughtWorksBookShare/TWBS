import {connect} from 'react-redux';
import ShowComments from '../components/ShowComments';

const mapStateToProps = (state) => {
    return {
        comments: state.showComments.comments
    }
};

export default connect(mapStateToProps)(ShowComments);