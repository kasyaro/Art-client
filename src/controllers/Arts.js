import React, { Component } from 'react';

class Arts extends Component {
    render() {
        return (
            <>
               
                {
                    this.props.arts.map(art => {
                        return (
                            <div className='arts' key={art.id}>
                                {/* <li>Title: <h3> {art.title}</h3></li> */}
                                <img src= {art.img}/>
                                {/* <li>description:<h3>{art.description}</h3> </li> */}
                                <button>CREATE</button> 
                                <button>X</button> 
                                <button>UPDATE</button> 
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Arts