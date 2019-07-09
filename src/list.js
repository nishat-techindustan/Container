import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Lists from './Lists';

const List = () => {
    return <Router>
        <div>
                <ul >
                    <li><NavLink to="/list/spawn">Spawn</NavLink> </li>
                    <li><NavLink to="/list/ironman">Ironman</NavLink> </li>
                    <li><NavLink to="/list/ghostrider">GhostRider</NavLink> </li>
                </ul>
                <Route path="/list/:name" component={Lists} />
        </div>
    </Router>
}


export default List; 