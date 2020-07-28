import React,{ Component } from 'react'

class Addcontact extends Component{
  constructor(props){
    super(props); 

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  
  onSubmit = e =>{
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email:this.emailInput.current.value,
      phone:this.phoneInput.current.value
    }
    console.log(contact);
  };
  static defaultProps = {
    name:'Fred',
    email:'mmm@gmail.com',
    phone:'0564894'
    }

  render(){
    const {name,email,phone} = this.props
    return(
      <div className="card mb-3">
      <div className="card-header">AddContact</div>
      <div className="card-body">
      <form onSubmit={this.onSubmit}>

      <div className="form-group">
      <label htmlFor='name'>Name</label>
      <input type="text" name="name"
      className="form-control form-control-lg"
      placeholder="enter a name"
      defaultValue={name}
      ref={this.nameInput}
      />
      </div>

       <div className="form-group">
      <label htmlFor='email'>Email</label>
      <input type="email" name="email"
      className="form-control form-control-lg"
      placeholder="enter email"
      defaultValue={email}
      ref={this.emailInput}
      />
      </div>

       <div className="form-group">
      <label htmlFor='name'>Phone</label>
      <input type="text" name="phone"
      className="form-control form-control-lg"
      placeholder="enter a phone"
      defaultValue={phone}
      ref={this.phoneInput}
      />
      </div>

      <input type="submit" value="Addcontact" className="btn btn-dark btn-block"/>
      </form>
      </div>
      </div>
    )
  }
}

export default Addcontact