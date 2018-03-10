import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./components/header";
import  { Home } from "./components/home"; 

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div classNmae="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div classNmae="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);