import React,{Component} from 'react'
import Contact from '../../components/contacts/Contact'
import {Consumer} from '../../Context'
class Contacts extends Component{

render(){
return(
  <Consumer>
  {value =>{
    const{contacts} = value;
    return(
       <React.Fragment> 
    {contacts.map(contact => (
      <Contact
        id={contact.id} 
        contact={contact}
      />
      ))}
    </React.Fragment> 
    )
  }}
  </Consumer>
)
}
}

export default Contacts