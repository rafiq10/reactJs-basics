import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./components/header";
import  { Home } from "./components/home"; 
import {Container, Row, Col} from 'reactstrap';

class App extends React.Component {
    render () 
    {
        var user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Rafal"} initielaAge={34} user = {user} />
                    </div>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);