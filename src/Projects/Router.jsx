import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './about'
import Contact from './contact'

function Router (){
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <link to="/">Home</link>
                    </li>
                    <li>
                        <link to="/about">About</link>
                    </li>
                    <li>
                        <link to="/Contact">Contact</link>
                    </li>
                </ul>
            </nav>
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Contact" component={Contact} />
            </Router>
        </BrowserRouter>
    )
}

export default Router