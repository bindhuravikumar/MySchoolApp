import React, {Component} from 'react';

class Details extends Component {
   
    render(){
        console.log("Details", this.props)
        const { schoollist, schoolname} = this.props;
        
        const filteredvalue = schoollist && schoollist.filter(x =>(x.name === schoolname));

        return(
            <div>
            <div className="title-name">Details of {schoolname}</div>
            <div className="card-flex">
            {filteredvalue && filteredvalue.map(x =>     
            (
                <div style={{border: '1px solid white', width:'200px', height: 'auto',
                    boxShadow: '0 0 25px #888888', marginBottom: '22px', marginRight:'22px', flex: 1,
                    borderRadius:'11px', padding:"11px"}}
                    key={x.name}>
                    <div><b>Website:</b> {x.website}</div>
                    <div><b>Description:</b>  {x.format_description}</div>
                    <div><b>Contact Name:</b>  {x.contact_name}</div>
                    <div><b>Contact Number:</b>  {x.contact_number}</div>
                    <div><b>Contact Email: </b> {x.contact_email}</div>
                    <div><b>Gender:</b>  {x.gender}</div>
                    <div><b> Address:</b>  {x.street}, {x.city}, {x.state}-{x.zip}</div>
                    
                </div>
            ))
            }
            </div></div>
        )
    }
}

export default Details;