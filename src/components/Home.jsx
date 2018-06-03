import React, { Component } from 'react'

import './Home.scss'

class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <header>
                    <div className="tabs">
                        <button className="active">
                            <span>Issues del area</span>
                        </button>
                        <button>
                            <span>Issues externos</span>
                        </button>
                    </div>
                    <div className="actions">
                        <button>Agregar Issue</button>
                    </div>
                </header>
                <section className="list-content">
                    <div className="list">
                        <h1 className="title">Nuevos</h1>
                        <ul>
                            <li className="card">
                                <div className="content">
                                    <div className="avatar">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="text">
                                        <a href="">¿Cuál es el formato de /users del servidor?</a>
                                        <span>Upload 02/06/18</span>
                                    </div>
                                    <div className="count">
                                        <span>0 replys</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home