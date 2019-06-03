import React, { Component } from 'react';
import Arts from './Arts.js'

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
    // ${foundUser.id}`
    getUser() {
        fetch('/users/1')
            .then(response => response.json())
            .then (jsonedUser => {
                this.setState({ user: jsonedUser, isLoaded: true})
               
            })
        
            //  .then(jsonedUser => this.setState({ user: jsonedUser }))
            .catch(error => console.error(error))
    }
    
// handleDelete (deletedUser){
        // fetch(`./users/${deletedUser.id}`, {
//           method: 'DELETE' ,
//           headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//            }
//         })
//         .then (json => {
// this.setState(state => {
//    const users =  state.users.filter((user, index) 
//    => user.id !== deletedUser.id)
//    return {
//        users
//    }
// })
// })

// .catch(error => console.log(error))     
//     }

    render() {
    //    const {user} = this.state.user
        return (  
             <>
                {/* <div className='arts' key={user.id}> */}
                 <h1>Welcome {this.state.user.first_name} {this.state.user.last_name}!</h1>
                 
                 {this.state.isLoaded === true && <Arts arts= {this.state.user.arts}/> }
                 <button> create </button>
                 <button> update </button>
                  {/* <button onClick ={()=> handleDelete(user)}> delete</button> */}
                   {/* </div> */}
             </>
        )
    }
}


export default User