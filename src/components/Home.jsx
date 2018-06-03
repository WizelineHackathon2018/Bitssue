import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.scss'
import env from './env'
import AddIssue from './AddIssue'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            addIssueIsPresent: false,
            team_list: {
                count: 0,
                priority: [],
                others: []
            }
        }

        this.onFinish = this.onFinish.bind(this)
    }
    componentDidMount(){
      axios.get(env.servidor_url + 'teams/1/issues').then (res => {
          let priority = res.data.filter( i => i.answeres.length == 0)
          let others = res.data.filter( i => i.answeres.length != 0)
        this.setState({ team_list: {
            count: res.data.length,
            priority: priority,
            others: others
        } })
      })
    }
    onFinish(){
        this.setState({ addIssueIsPresent: false })
        axios.get(env.servidor_url + 'teams/1/issues').then (res => {
            let priority = res.data.filter( i => i.answeres.length == 0)
            let others = res.data.filter( i => i.answeres.length != 0)
          this.setState({ team_list: {
              count: res.data.length,
              priority: priority,
              others: others
          } })
        })
    }
    render(){
        return (
            <div>
                { this.state.addIssueIsPresent ? <AddIssue onFinish={this.onFinish}/> : null }
                <header>
                    <div className="tabs">
                        <button className="active">
                            <span>Issues del area</span>
                            <span className="count">{this.state.team_list.count}</span>
                        </button>
                        <button>
                            <span>Issues externos</span>
                            <span className="count">1</span>
                        </button>
                    </div>
                    <div className="actions">
                        <button className="add" onClick={ ()=> this.setState({ addIssueIsPresent: true }) }>Agregar Issue</button>
                    </div>
                </header>
                <section className="list-content">
                    <div className="list">
                        <h1 className="title">Sin respuesta</h1>
                        <ul>
                            {
                                this.state.team_list.priority.map( (i, index) => (
                                    <li className={`card ${ (i.updated_at.search('2018-06-03') != -1) ? 'release' : '' }`} key={i.id}>
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
                    <div className="list">
                        <h1 className="title">Anteriores</h1>
                        <ul>
                            {
                                this.state.team_list.others.map( (i, index) => (
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
