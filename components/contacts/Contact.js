import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../../Context'
class Contact extends Component{
   state = {
     showContactInfo:false
   }; //!this.state.showContactInfo returns the opposite of whaterver our state is, if it's true it will return false.
  onDeleteClick = (id,dispatch)=>{
    dispatch({type:'DELETE_CONTACT',payload:id});
  };
  render(){
    const {name,email,phone,id} = this.props.contact
    const {showContactInfo} = this.state;
    return(
      <Consumer>
      {value =>{
        const {dispatch} = value;
        return(
          <div className="card card-body mb-3">
        <h4>
        {name}<i onClick={()=>this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down"
        style={{ cursor:'pointer'}}
        />
        <i 
        className="fas fa-times" style={{ cursor:'pointer',float:'right',
        color:'red'}}
        onClick={this.onDeleteClick.bind(this,id,dispatch)}
        />
        </h4>
        {showContactInfo?(<ul className="list-group">
        <li className="list-group-item">Email:{email}</li>
        <li className="list-group-item">Phone:{phone}</li>
      </ul>):null} 
      
        </div>
        )
      }}
      </Consumer>
      )
  }
}

Contact.PropTypes = {
  contact: PropTypes.object.isRequired,
  
}

export default Contact