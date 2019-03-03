import React, {Component} from 'react';
import {BrowserRouter,Switch, Route, NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';

import FreeSchools from './FreeSchools';
import PaidSchools from './PaidSchools';
import OnlineSchools from './OnlineSchools';
import InSchools from './InSchools';
import FemaleSchools from './FemaleSchools';
import CoedSchools from './CoEdSchools';



class Schools extends Component{
    constructor(){
        super();
        this.state = {
            schools:[]
        }
    }

    componentDidMount(){
        const self = this;
        axios.get('http://www.mocky.io/v2/5c794c8c3000007d3149b32d')
        .then(function(response){
            self.setState({schools: response.data.schools});
            
        })
        .catch(function(error){
            console.log(error);
        })
    }

    clickevent = (title) =>{
        this.props.getschools(this.state.schools);
        this.props.getschoolname(title);
    }


    render(){
        console.log(this.props);
        return(
            <div className="App">
            <div className="user-name">Logged in Username: {this.props.username}</div>
            <div style={{display:"flex", backgroundColor: "#006fcf"}}>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/freeschools">Free Schools</NavLink>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/paidschools">Paid Schools</NavLink>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/onlineschools">Online Schools</NavLink>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/inschools">In-Schools</NavLink>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/femaleschools">Girls Schools</NavLink>
                <NavLink className="tabbbox" activeStyle={{backgroundColor:"blue"}} to="/schools/coedschools">Co-ed Schools</NavLink>
            </div>
            <div>
                
            <Switch>

                <Route path="/schools/freeschools" render={()=> <FreeSchools 
                currentvalue ={this.state.schools}
                clickevent={this.clickevent} />}></Route>

                <Route path="/schools/paidschools" render={() => <PaidSchools
                currentvalue ={this.state.schools}
                clickevent={this.clickevent}/>}></Route>

                <Route path="/schools/onlineschools" render={ () => <OnlineSchools
                 currentvalue ={this.state.schools}
                 clickevent={this.clickevent}/>}></Route>

                <Route path="/schools/inschools" render={ () => <InSchools
                 currentvalue ={this.state.schools}
                 clickevent={this.clickevent}/>}></Route>

                <Route path="/schools/femaleschools" render={ () => <FemaleSchools 
                 currentvalue ={this.state.schools}
                 clickevent={this.clickevent}/>}></Route>

                <Route path="/schools/coedschools" render={ () => <CoedSchools
                 currentvalue ={this.state.schools}
                 clickevent={this.clickevent}/>}></Route>

                <Route  render={()=> <Redirect to="/schools/freeschools"></Redirect>}></Route> 
            </Switch>
          
            </div>
            </div>
        )
    }
}

export default Schools;