import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getusername, getschools, getschoolname} from '../Actions/Actions'
import Details from '../Component/Details';

const mapStateToProps = (store) =>{
    return{
        username: store.name,
        schoollist : store.schools,
        schoolname : store.schoolname
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getusername, getschools, getschoolname
        }, dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)