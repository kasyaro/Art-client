import React, { Component } from 'react';
import Form from './FormUpdateArt.js'


class Arts extends Component {
    constructor(props) {
        super(props)
        this.state = {
              art: {},
              isLoaded: false,
                          
            }
 this.handleChange = this.handleChange.bind(this)
 this.handleUpdate = this.handleUpdate.bind(this)
        }


 handleChange (event) {
        //track changes to input (this will be a "handleChange") this will have the data (stored in state)
        console.log(event.target)
        this.setState({
            [event.target.id] : event.target.value},
            
        )
      }

      
    handleUpdate (event) {
        //submit the changes (this will be a "handlesubmit, handleadd") this will take the data (stored in state) and PUT/PATCH to backend
        event.preventDefault()
        console.log(event.target.id)
        console.log(this.state.art.title)
        let myInfo = {
            title: this.state.title, 
            img: this.state.img,  
            // size: this.state.user.arts.size,
            // description: this.state.user.arts.description,
            // style: this.state.user.arts.style,
            // medium: this.state.user.arts.medium,
            // material: this.state.user.arts.material
        }
        console.log(myInfo)
       // fetch(`/users/${event.target.id}`, {
        fetch('/users/1/arts/1', {
          body: JSON.stringify(myInfo),
          method: 'PUT',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
      })
       .then(updatedArt => {
        
         this.getUser()
       })
       .catch(error => console.log(error))
      }

   // ******************* */
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
//    const user =  state.user.filter((user, index) 
//    => user.id !== deletedUser.id)
//    return {
//        user
//    }
// })
// })

// .catch(error => console.log(error))     
//     }

    render() {
        console.log(this.state)
        return (
            <>
               
                {
                    this.props.arts.map(art => {
                        return (
                            <div className='arts' key={art.id}>
                               <li>Title: <h6> {art.title}</h6></li>
                                <img src= {art.img}/>
                                <li>description:<h6>{art.description}</h6> </li>
                                <li>size: <h6> {art.size}</h6></li>
                                <li>style: <h6> {art.style}</h6></li>
                                <li>medium: <h6> {art.medium}</h6></li>
                                <li>material: <h6> {art.material}</h6></li>
                               
                                <button>X</button> 
             <button onClick = {() => this.setState({isLoaded: true})} >UPDATE</button>
             
             {this.state.isLoaded && 

             <Form 
                 update = {this.handleUpdate} change= {this.handleChange} 
                //  user_id = {this.state.user.id}
                //  arts = {this.state.user.arts}
                //  title = {this.state.user.arts[0].title}
                // img = {this.state.user.arts[0].img}
                 
             /> 
             }
               </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Arts