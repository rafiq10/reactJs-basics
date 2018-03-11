import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';

import  { Home } from "./components/Home"; 
import { Root } from './components/Root';
import { User } from './components/User';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                
                <div>
                    <div>
                        <Root />
                    </div>
                    <div>
                        <Route path={"/"} exact component={Home} />
                        <Route path={"/home"} component={Home}/>
                        <Route path={"/user"} component={User} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);