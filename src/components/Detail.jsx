import React, { Component } from 'react'

import './Detail.scss'

class Detail extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        document.body.style.backgroundColor = "#F9F9F9"
    }
    render(){
        return (
            <div>
                <div className="background-head"></div>
                <div className="card-detail">
                    <div className="question">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="content">
                            <div className="text">
                                <span className="question">¿Cuál es el formato de /users del servidor?</span>
                                <span className="date">Upload 02/06/18</span>
                            </div>
                            <div className="comments">
                                <p>Cua´l es el formato para el servidor, ayuda.</p>
                            </div>
                        </div>
                    </div>
                    <div className="responses">
                        <ul>
                            <li className="response">
                                <div className="content">
                                    <div className="avatar">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="text">
                                        <p>El formato de JSON es el siguiente</p>
                                    </div>
                                    <div className="count">
                                        <span>Upload 02/06/18</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="submit">
                        <input type="text"/>
                        <button>Enviar respuesta</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail