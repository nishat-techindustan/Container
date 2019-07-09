import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import List from './list'
// import Error from './Error';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink className="Link" to="/">Home</NavLink></li>
            <li><NavLink className="Link" to="/about">About</NavLink></li>
            <li><NavLink className="Link" to="/list">Names</NavLink></li>
          </ul>
        </nav>
        {/* exact return the exact path but if we neglect it,
         it will return the path that matches the first pattern
          that is / and /about will be returned */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={List} />
        </Switch>
        {/* <Route path="/error" component={Error}><Redirect from="/bin" to="/error"/></Route> */}
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <ul>

//           <li>
//             <NavLink to="/spawn">Spawn</NavLink>
//           </li>
//           <li>
//             <NavLink to="/ironman">ironman</NavLink>
//           </li>
//           <li>
//             <NavLink to="/ghostrider">Ghost Rider</NavLink>
//           </li>

//         </ul>
//         <Route path="/:name" component={List}/>
//       </div>
//     </Router>
//   );
// }

// const List = (props) => {
//   return (
//     <div>
//       <h3>name: {props.match.params.name}</h3>
//     </div>
//   )
// }

export default App;
