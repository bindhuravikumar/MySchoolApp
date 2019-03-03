import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from '../Component/Login';
import {getusername} from '../Actions/Actions'

const mapStateToProps = (store) =>{
    return{
        username: store.name
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getusername
        }, dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)