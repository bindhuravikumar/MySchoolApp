import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getusername, getschools, getschoolname} from '../Actions/Actions'
import Schools from '../Component/Schools';

const mapStateToProps = (store) =>{
    return{
        username: store.name,
        schoollist : store.schools,
        schoolname: store.schoolname
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
)(Schools)