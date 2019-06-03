import React, { Component } from 'react';
import Arts from './Arts.js'

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
              users: [],
              isLoaded:false 
              
                   
         }
        // this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.getUsersArt()
    }

    getUsersArt() {
        fetch('/users/')
            .then(response => response.json())
            .then(jsonedUsers => this.setState({ users: jsonedUsers, isLoaded:true }))
            .catch(error => console.error(error))
    }
    
// handleDelete (deletedUser){
//         fetch(`./users/${deletedUser.id}`, {
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
        console.log(this.state.users);
        
        return (
            <>
               
                {
                    this.state.isLoaded &&this.state.users.map(user => {
                        return (
                            <div className='arts' key={user.id}>
                                 <h1>Welcome {user.first_name}!</h1>
                                <Arts arts= {user.arts}/> 
                                <button> create </button>
                                {/* <button onClick ={()=> handleDelete(user)}> delete</button> */}
                            </div>
                        )

                    })
                }
            </>
        )
    }
}


export default Users