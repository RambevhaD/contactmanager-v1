import React,{Component} from 'react'
const Context = React.createContext();

const reducer = (state,action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id !==action.payload)
      }
    case 'ADD_CONTACT':
    return{
      ...state,
      contacts: [action.payload,...state.contacts]
    }

    default:
      return state;
      }
    }

export class Provider extends Component{
  state = {
    contacts:[
      {
        id:1,
        name:"Rambevha",
        email:"Rambevha32@gmail.com",
        phone:'0796541367'
      },
      {
         id:2,
        name:"Dakalo",
        email:"Rambevha32@gmail.com",
        phone:'0796541367'
      },
      {
         id:3,
        name:"Developer",
        email:"Rambevha32@gmail.com",
        phone:'0796541367'
      }
    ],
    dispatch: action => this.setState(state => reducer(state,action))
  }

  render(){
    return(
      <Context.Provider value={this.state}>
      {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;