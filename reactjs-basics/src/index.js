import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./components/header";
import  { Home } from "./components/home"; 

class App extends React.Component {
    render () 
    {
        var user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Rafal"} age={34} user = {user} >
                            <p>This is a paragraph!</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);