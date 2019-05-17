import React, {Component} from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from "./containers/Home"
import Editor from "./containers/Editor.js"
import Prev_Elegant from "./containers/Prev_elegant"
import Prev_Greyvo from "./containers/Prev_greyvo"
import ScrollToTop from './containers/Up'
class App extends Component {
    render() {

        return (
            <div className="Maincontainer">
                <HashRouter>
                    <div>
                    <ScrollToTop />
                        <Switch>
                            <Route component={Home} exact path="/"/>
                            <Route component={Home} path="/home"/>
                            <Route component={Editor} path="/editor"/>
                            <Route component={Prev_Elegant} path="/elegant"/>
                            <Route component={Prev_Greyvo} path="/greyvo"/>
                        </Switch>
                     </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;