import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const headerStyle={borderBottom: '1px solid lightgray'}
const footerStyle={
 bottom:'0', width: '200px'}

class InSchools extends Component {
    render(){
       const { clickevent, currentvalue} = this.props;
        
        const filteredvalue = currentvalue.filter(x =>(x.online_only === false));

        return(
            <Link to="/details">
            <div className="title-name">In Schools</div>
            <div className="card-flex">
            {filteredvalue.map(x =>     
            (
                <div style={{border: '1px solid white', width:'200px', height: 'auto',
                    boxShadow: '0 0 25px #888888', marginBottom: '22px', marginRight:'22px', flex: 1,
                    borderRadius:'11px'}}
                    onClick= {() => clickevent(x.name)} key={x.name}>
                    
                    <div style={headerStyle}>{x.name}</div>
                    <div> <b>Address:</b> {x.street}, {x.city}, {x.state}</div>
                    <div><b>Contact Number</b> : {x.contact_number}</div>
                    <footer style={footerStyle}>
                    </footer>
                </div>
            ))
            }
            </div></Link>
        )
    }
}

export default InSchools;