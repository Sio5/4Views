import React, { Component } from "react";
import { HashRouter, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home"
import Editor from "./containers/Editor.js"


class App extends Component {
  render() {
    
    return (
<div className="Maincontainer">
<HashRouter>
        <div>
          <Switch>
          <Route component={Home} exact path="/" />
            <Route component={Home} path="/home" />
            <Route component={Editor} path="/editor" />

          </Switch>
        </div>
      </HashRouter>
    </div>
    );
  }
}

export default App;