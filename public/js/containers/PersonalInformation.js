import {connect} from 'react-redux';
import PersonalInformation from '../components/PersonalInformation';

const mapStateToProps = (state)=>{
    return {
        personalInformation:state.personalInformation
    }
};

export default connect(mapStateToProps)(PersonalInformation);