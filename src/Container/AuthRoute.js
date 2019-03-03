import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getusername} from '../Actions/Actions'
import { AuthRoute } from '../Component/AuthRoute';

const mapStateToProps = (store) =>{
    console.log("CONTAINER NAME", store);
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
)(AuthRoute)