import {connect} from 'react-redux';
import PersonalInformation from '../components/PersonalInformation';

const mapStateToProps = (state)=>{
    return {
        personalInformation:state.personalInformation.personalInformation
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        showPersonalInformation:()=>{
            dispatch({type:"GETPERSONALINFORMATION"})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonalInformation);