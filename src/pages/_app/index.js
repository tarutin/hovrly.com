import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../../components/misc/scrolltop'
import Theme from '../../components/misc/theme'
import Home from '../home'
import Donate from '../donate'
import NotFound from '../404'

class App extends Component {

    render() {
        
        if(Theme.get() === 'dark') {
            document.body.classList.add('night')
        }
        
        return (
            <BrowserRouter>
                <>
                    <ScrollToTop/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/donate' component={Donate}/>
                        <Route component={NotFound}/>
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}

export default App;
