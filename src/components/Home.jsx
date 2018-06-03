import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Home.scss'
import env from './env'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            team_list: []
        }
    }
    componentDidMount(){
      axios.get(env.servidor_url + 'teams/1/issues').then (res => {
        this.setState({ team_list: res.data })
      })
    }
    render(){
        return (
            <div>
                <header>
                    <div className="tabs">
                        <button className="active">
                            <span>Issues del area</span>
                            <span className="count">{this.state.team_list.length}</span>
                        </button>
                        <button>
                            <span>Issues externos</span>
                            <span className="count">1</span>
                        </button>
                    </div>
                    <div className="actions">
                        <button className="add">Agregar Issue</button>
                    </div>
                </header>
                <section className="list-content">
                    <div className="list">
                        <h1 className="title">Nuevos</h1>
                        <ul>
                            {
                                this.state.team_list.map( (i, index) => (
                                    <li className="card" key={i.id}>
                                        <div className="content">
                                            <div className="avatar">
                                                <img src={`https://randomuser.me/api/portraits/thumb/men/${i.id}.jpg`} alt=""/>
                                            </div>
                                            <div className="text">
                                                <Link to={`detail?id=${i.id}`}>{i.title}</Link>
                                                <span>{i.updated_at}</span>
                                            </div>
                                            <div className="count">
                                                <span>{i.answeres.length} replys</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
