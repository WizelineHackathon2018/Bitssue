import React, { Component } from 'react'
import axios from 'axios'
import env from './env'

class AddIssue extends Component {
    constructor(props){
        super(props)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }
    handleOnSubmit(evt){
        evt.preventDefault()
        let issueText = document.getElementById('issueText').value
        let commentText = document.getElementById('commentText').value
        let areaText = document.getElementById('areaText').value
        axios.post(env.servidor_url + 'teams/1/issues', {
            title: issueText,
            content: commentText,
            idMember: 1,
            idTeamFrom: 1,
            idTeamTo: areaText
        }).then( res => {
            this.props.onFinish()
        })
    }
    render(){
        return (
            <div>
                <div className="add-isssue-modal-blur" onClick={this.props.onFinish}></div>
                <div className="add-isssue-modal">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="inputs">
                            <input id="issueText" type="text" placeholder="Issue..." required/>
                            <textarea id="commentText" placeholder="Añade un comentario al respecto..." required></textarea>
                        </div>
                        <div className="actions">
                            <div className="toggle">
                                <span>Para</span>
                                <select id="areaText">
                                    <option value="1">Area de recursos humanos</option>
                                    <option value="2">Area de recursos humanos</option>
                                    <option value="3">Area de recursos humanos</option>
                                </select>
                            </div>
                            <div>
                                <input type="submit" value="Agregar"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddIssue