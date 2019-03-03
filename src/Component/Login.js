import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state ={
            name:""
        }
    }

    getname =() =>{
        this.props.getusername(this.state.name);
    }

    textChange = (e) =>{
        this.setState({name: e.target.value});
    }

    render(){
        console.log(this.props);
        return(
            <div style={{border: "1px solid lightgray", padding:"22px"}}>
                <div style={{paddingBottom:"11px"}}>
                <div style={{width:"50%", display:"inline-block", textAlign: "right"}}>
                <label style={{padding:"11px"}}>Username*:</label></div>
                <div style={{width:"50%", display:"inline-block"}}>
                <input id="Name" type="text" className="text-box" onChange = {this.textChange} /></div>
            </div>
            <div style={{paddingBottom:"11px"}}>
                <div style={{width:"50%", display:"inline-block", textAlign: "right"}}>
                <label style={{padding:"11px"}}>Email:</label></div>
                <div style={{width:"50%", display:"inline-block"}}>
                <input type="text" className="text-box"/></div>
            </div>
            <div style={{paddingBottom:"11px"}}>
                <div style={{width:"50%", display:"inline-block", textAlign: "right"}}>
                <label style={{padding:"11px"}}>Password:</label></div>
                <div style={{width:"50%", display:"inline-block"}}>
                <input type="text" className="text-box"/></div>
            </div>
            <div style={{ textAlign: "right", width:"63.5%"}}>
                <Link style={{backgroundColor:"#006fcf", color:"#fff", border:"1px solid #006fcf",
                padding:"5px", borderRadius:"3px"}} 
                type="button" value="Submit" onClick={this.getname} to="/schools">Submit</Link>
            </div>
            </div>
        )
    }
}

export default Login;