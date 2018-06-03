import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'

import Home from './Home'
import Detail from './Detail'

class MainComponent extends Component {
    render(){
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </div>
        )
    }
}

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <MainComponent/>
            </BrowserRouter>
        )
    }
}

export default App