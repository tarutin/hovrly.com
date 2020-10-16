import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../../components/misc/scrolltop'
import Home from '../home'
import Donate from '../donate'
import NotFound from '../404'

class App extends Component {

    render() {

        document.body.classList.add('night')

        return (
            <BrowserRouter>
                <div>
                    <ScrollToTop/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/donate' component={Donate}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
