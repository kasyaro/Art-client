import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
              art: {},
              isLoaded: false,
                           
            }
            console.log(this.props.user_id)
            // console.log(this.props.arts[0])

        }

        
        //************************* */
        componentDidMount() {
            this.getArt()
        }
        // ${foundUser.id}`
        getArt() {
            fetch('/users/1/arts/1')
            //fetch(`/users/${this.props.user_id}/arts/${this.props.arts[this.state.art]}`)
                .then(response => response.json())
                .then (jsonedArt => {
                this.setState({ art: jsonedArt, isLoaded: true})
                    // console.log (jsonedArt)
                   
                })
            
                //  .then(jsonedUser => this.setState({ user: jsonedUser }))
                .catch(error => console.error(error))
        }
        //************************* */
    




//******************************* */
    render() {
        //console.log(this.props.update)
        return (          
        <>         
            <form id={this.props.id} onSubmit={this.props.update}>
            <div class="form-group"> 
            <label for="exampleInputTitle">Title </label>
              <input
                onChange={this.props.change}
                name={'title'}
                placeholder={'title'}
                type={'text'}
                defaultValue={this.props.title}
                id={'title'}
               />
               </div>

               <div class="form-group"> 
            <label for="exampleInputImage">Image </label>
               <input
                  onChange={this.props.change}
                 name={'img'}
                 placeholder={'img'}
                 type={'text'}
                  defaultValue={this.props.img}
                 id={'img'}
              />
              </div>

              <div class="form-group"> 
           <label for="exampleInputDescription">Description </label>
              <input
               onChange={this.props.change}
                name={'description'}
                placeholder={'description'}
                type={'text'}
                defaultValue={this.props.description}
                id={'description'}
             />
             </div>

             <div class="form-group"> 
            <label for="exampleInputSize">Size </label>
             <input
               onChange={this.props.change}
                name={'size'}
                placeholder={'size'}
                type={'text'}
                defaultValue={this.props.size}
                id={'size'}
             />
             </div>

             <div class="form-group"> 
          <label for="exampleInputStyle">Style </label>
           <input
           onChange={this.props.change}
            name={'style'}
              placeholder={'style'}
               type={'text'}
                 defaultValue={this.props.style}
                 id={'style'}
              />
              </div>


              <div class="form-group"> 
             <label for="exampleInputMedium">Medium </label>
              <input
                onChange={this.props.change}
                 name={'medium'}
                 placeholder={'medium'}
                 type={'text'}
                 defaultValue={this.props.medium}
                 id={'medium'}
              />
              </div>

  <div class="form-group"> 
             <label for="exampleInputMaterial">Material </label>
              <input
                onChange={this.props.change}
                 name={'materila'}
                 placeholder={'materila'}
                 type={'text'}
                 defaultValue={this.props.materila}
                 id={'materila'}
              />
              </div>


              <input type='submit' value='submite change' onClick={this.props.update}/>
            </form>
            </>
           
        )
    }
}
export default Form