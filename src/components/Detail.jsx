import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import env from './env'

import './Detail.scss'

class Detail extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: undefined
        }

        this.handleResponseIssue = this.handleResponseIssue.bind(this)
    }
    componentDidMount(){
        document.body.style.backgroundColor = "#F9F9F9"

        let id = this.props.location.search.split('=')[1]
        axios.get(env.servidor_url + 'issues/' + id).then(res => {
            this.setState({ data: res.data })
        })
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = ""
    }
    handleResponseIssue(){
        let responseText = document.getElementById('responseText').value
        let id = this.props.location.search.split('=')[1]

        axios.post(env.servidor_url + 'answeres', {
            content: responseText,
            memberId: 1,
            idIssue: id
        }).then( res => {
            responseText = ""
            axios.get(env.servidor_url + 'issues/' + id).then(res => {
                this.setState({ data: res.data })
            })
        })
    }
    render(){
        return (
            <div>
                <div className="background-head"></div>
                {
                    this.state.data ?
                    <div className="card-detail">
                        <div className="action">
                            <Link to="/"><i className="material-icons">arrow_back</i></Link>
                        </div>
                        <div className="question">
                            <div className="avatar">
                                <img src={`https://randomuser.me/api/portraits/thumb/men/${this.state.data.id}.jpg`} alt=""/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span className="question">{this.state.data.title}</span>
                                    <span className="date">{this.state.data.updated_at}</span>
                                </div>
                                <div className="comments">
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="responses">
                            <ul>
                                {
                                    this.state.data.answeres.map( (i, index) => (
                                    <li className="response" key={index}>
                                        <div className="content">
                                            <div className="avatar">
                                                <img src={`https://randomuser.me/api/portraits/thumb/men/${i.memberId}.jpg`} alt=""/>
                                            </div>
                                            <div className="text">
                                                <p>{i.content}</p>
                                            </div>
                                            <div className="count">
                                                <span>{i.updated_at}</span>
                                            </div>
                                        </div>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="submit">
                            <input id="responseText" type="text" placeholder="Escribe una respuesta"/>
                            <button onClick={this.handleResponseIssue}>Enviar respuesta</button>
                        </div>
                    </div>
                :
                    null
                }
            </div>
        )
    }
}

export default Detail