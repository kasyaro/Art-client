import React, { Component } from 'react';
import Arts from './Arts.js'
import Form from './FormUpdateArt.js'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
              user: {},
              isLoaded: false,
                           
         }
        
        // this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.getUser()
    }
    
    getUser() {
        fetch('/users/1')
        //fetch(`/users/${this.state.user.id}`)
            .then(response => response.json())
            .then (jsonedUser => {
                this.setState({ user: jsonedUser, isLoaded: true})
               
            })
        
            //  .then(jsonedUser => this.setState({ user: jsonedUser }))
            .catch(error => console.error(error))
    }
    //******************** */ 
   

    render() {
        console.log(this.state.user.arts)
        return ( 
           
               <>
                
                 <h1>Welcome {this.state.user.first_name} {this.state.user.last_name}!</h1>
                
                 {this.state.isLoaded === true && <Arts arts= {this.state.user.arts}/> }
                  <button> create </button>
                 
                 
                 <div className='box'>
                     <h3>personal information : </h3>
                 <h4><span>phone : </span>{this.state.user.phone}</h4>
                 <h4><span>address : </span>{this.state.user.address}</h4>
                 </div>
                {/* {this.state.isLoaded &&
                 <Form 
                 update = {this.handleUpdate} change= {this.handleChange} 
                 user_id = {this.state.user.id}
                 arts = {this.state.user.arts}
                 title = {this.state.user.arts[0].title}
                img = {this.state.user.arts[0].img}
                 
                />
                } */}
             
                  
             </>
            
        )
    }
}


export default User